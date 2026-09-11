// Post-deploy smoke test. Fails the workflow if the live site is not actually serving.
//
// A green sync step only proves bytes reached S3. This proves CloudFront serves them, TLS
// works, the www redirect fires, and the bucket is still private.
const APEX = 'https://drestin.com'
const WWW = 'https://www.drestin.com'
const BUCKET = 'drestin-site-prod-218827615080'

const checks = [
  {
    name: 'apex serves 200',
    run: async () => {
      const r = await fetch(`${APEX}/`, { redirect: 'follow' })
      if (r.status !== 200) return `expected 200, got ${r.status}`
      const html = await r.text()
      if (!html.includes('<div id="root">')) return 'response is not the app shell'
      return null
    },
  },
  {
    name: 'www redirects to apex',
    run: async () => {
      const r = await fetch(`${WWW}/`, { redirect: 'manual' })
      if (r.status !== 301) return `expected 301, got ${r.status}`
      const to = r.headers.get('location')
      if (!to?.startsWith(APEX)) return `redirects to ${to}`
      return null
    },
  },
  {
    name: 'deep path falls back to index.html',
    run: async () => {
      const r = await fetch(`${APEX}/deploy-smoke-test/${Date.now()}`, { redirect: 'follow' })
      return r.status === 200 ? null : `expected 200, got ${r.status}`
    },
  },
  {
    name: 'bucket is not publicly readable',
    run: async () => {
      const r = await fetch(`https://${BUCKET}.s3.us-east-1.amazonaws.com/index.html`)
      return r.status === 403 ? null : `expected 403, got ${r.status} - bucket may be public`
    },
  },
  {
    name: 'index.html is not cached immutably',
    run: async () => {
      const r = await fetch(`${APEX}/`, { redirect: 'follow' })
      const cc = r.headers.get('cache-control') ?? ''
      // If index.html ever goes immutable, deploys stop being visible to returning visitors.
      return cc.includes('immutable') ? `index.html has ${cc}` : null
    },
  },
]

let failed = 0
for (const check of checks) {
  let problem
  try {
    problem = await check.run()
  } catch (e) {
    problem = e.message
  }
  console.log(`${problem ? 'FAIL' : 'ok  '}  ${check.name}${problem ? ` - ${problem}` : ''}`)
  if (problem) failed += 1
}

if (failed) {
  console.error(`\n${failed} check(s) failed against the live site.`)
  process.exit(1)
}
console.log('\nLive site verified.')
