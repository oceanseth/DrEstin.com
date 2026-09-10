// Reports whether drestin.com is delegated to our Route 53 zone yet.
//
// The registry (.com TLD servers) is the source of truth: it flips within minutes of the
// registrar pushing the change. Public resolvers lag behind it by however much of the old
// TTL they have left, so a registry match with resolvers still stale is normal and fine -
// it means the change is real and just needs to age out.
//
// Usage: npm run check:dns          one pass
//        npm run check:dns -- --watch   re-check every 60s until delegated
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const run = promisify(execFile)
const TLD = 'a.gtld-servers.net' // authoritative for .com delegations
const RESOLVERS = [
  ['Google', '8.8.8.8'],
  ['Cloudflare', '1.1.1.1'],
  ['Quad9', '9.9.9.9'],
]

const DOMAIN = process.env.DOMAIN ?? 'drestin.com'
const STACK = process.env.DNS_STACK ?? 'drestin-dns'
const watch = process.argv.includes('--watch')

const nsFrom = (text) =>
  [...text.matchAll(/nameserver\s*=\s*([^\s]+?)\.?$/gim)]
    .map((m) => m[1].toLowerCase())
    // Root hints show up in nslookup's preamble; only keep the zone's own delegation.
    .filter((n) => !n.endsWith('root-servers.net'))
    .sort()

async function queryNs(server) {
  try {
    const { stdout, stderr } = await run('nslookup', ['-type=NS', DOMAIN, server], {
      timeout: 15000,
    })
    return nsFrom(stdout + stderr)
  } catch (e) {
    // nslookup exits non-zero on NXDOMAIN/timeouts but still prints usable output.
    return nsFrom((e.stdout ?? '') + (e.stderr ?? ''))
  }
}

async function expectedNs() {
  const { stdout } = await run(
    'aws',
    [
      'cloudformation', 'describe-stacks',
      '--stack-name', STACK,
      '--region', 'us-east-1',
      '--query', "Stacks[0].Outputs[?OutputKey=='NameServers'].OutputValue",
      '--output', 'text',
    ],
    { shell: process.platform === 'win32' },
  )
  return stdout
    .trim()
    .split(',')
    .map((s) => s.trim().replace(/\.$/, '').toLowerCase())
    .filter(Boolean)
    .sort()
}

const same = (a, b) => a.length > 0 && a.length === b.length && a.every((v, i) => v === b[i])

// The registrar's own record, straight from Verisign. This is what distinguishes "GoDaddy
// never recorded the change" from "GoDaddy recorded it and it is spreading" - the registry
// and public resolvers both look identical in those two cases for the first few minutes.
async function registrarView() {
  try {
    const res = await fetch(`https://rdap.verisign.com/com/v1/domain/${DOMAIN.toUpperCase()}`)
    if (!res.ok) return null
    const j = await res.json()
    return {
      nameservers: (j.nameservers ?? []).map((n) => n.ldhName.toLowerCase()).sort(),
      lastChanged: (j.events ?? []).find((e) => e.eventAction === 'last changed')?.eventDate,
      locked: (j.status ?? []).includes('client update prohibited'),
      signed: Boolean(j.secureDNS?.delegationSigned),
    }
  } catch {
    return null
  }
}

async function pass(want) {
  const registry = await queryNs(TLD)
  const delegated = same(registry, want)

  console.log(`\n[${new Date().toLocaleTimeString()}] ${DOMAIN}`)
  console.log(`  registry (.com)  ${delegated ? 'OK  ' : 'WAIT'}  ${registry.join(' ') || '(none)'}`)

  if (!delegated) {
    console.log(`  expected         ${want.join(' ')}`)

    const reg = await registrarView()
    if (reg) {
      const saved = same(reg.nameservers, want)
      console.log(`  registrar (RDAP) ${saved ? 'OK  ' : 'WAIT'}  ${reg.nameservers.join(' ')}`)
      console.log(`  last changed     ${reg.lastChanged ?? 'unknown'}`)
      if (saved) {
        console.log('\nGoDaddy has the change; the registry is still catching up. Wait.')
      } else {
        console.log('\nGoDaddy has NOT recorded the change yet. If you saved it more than')
        console.log('~30 minutes ago, it did not take - check:')
        console.log('  - Domain Settings > Nameservers (NOT the DNS records page; adding NS')
        console.log('    records inside GoDaddy’s own zone does nothing)')
        console.log('  - any confirmation email GoDaddy sent about the change')
        if (reg.locked) console.log('  - the domain lock is on (client update prohibited)')
        if (reg.signed) console.log('  - DNSSEC is on; turn it off before switching nameservers')
      }
    }
    return false
  }

  // Registry is right; report how far the change has spread.
  const results = await Promise.all(
    RESOLVERS.map(async ([name, ip]) => [name, same(await queryNs(ip), want)]),
  )
  for (const [name, ok] of results) {
    console.log(`  ${name.padEnd(16)} ${ok ? 'OK  ' : 'stale'}  ${ok ? '' : '(cached, will age out)'}`)
  }

  const everywhere = results.every(([, ok]) => ok)
  console.log(
    everywhere
      ? '\nDelegated and propagated. Safe to run: npm run infra:site'
      : '\nDelegated at the registry. ACM validation will work now - resolver caches catch up on their own.',
  )
  return true
}

const want = await expectedNs()
if (!want.length) {
  console.error(`Could not read name servers from stack ${STACK}.`)
  process.exit(1)
}

if (!watch) {
  process.exit((await pass(want)) ? 0 : 1)
}

// Capped so a watch left running overnight stops on its own rather than polling forever.
const MAX_PASSES = Number(process.env.MAX_PASSES ?? 120) // 120 x 60s = 2 hours
for (let i = 0; i < MAX_PASSES; i += 1) {
  if (await pass(want)) process.exit(0)
  await new Promise((r) => setTimeout(r, 60000))
}
console.error(`\nGave up after ${MAX_PASSES} checks. Re-run when the registrar record updates.`)
process.exit(1)
