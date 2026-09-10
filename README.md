# drestin.com

Vite + React site for Dr. Estin ("docmaui"), served from S3 behind CloudFront.

## Local

```sh
npm install
npm run dev
```

All site copy lives in [`src/content.js`](src/content.js) — edit that one file rather than
the components. Entries marked `TODO` are placeholders. Social links with `href: null` are
rendered greyed out and non-clickable until a URL is filled in.

## Media

Photos and the welcome video live in [`public/media/`](public/media/) — see the README there
for formats and size limits. Add a file, then point `src/content.js` at it; until you do, the
page shows a dashed placeholder in that spot rather than a broken image.

`npm run check:media` verifies every referenced file exists and that photos with a `src` also
have `alt` text. `npm run deploy` runs it first and refuses to ship if it fails.

## Checking DNS delegation

```sh
npm run check:dns              # one pass
npm run check:dns -- --watch   # re-check every 60s until delegated (capped at 2h)
```

Three layers, checked in order, because they fail differently:

1. **Registrar (RDAP)** — has GoDaddy actually recorded the change? If this still shows
   `domaincontrol.com` half an hour after saving, the change did not take.
2. **Registry (`.com` TLD servers)** — the source of truth for delegation. Flips within
   minutes of the registrar pushing.
3. **Public resolvers** — Google, Cloudflare, Quad9. These lag by whatever is left of the
   old TTL. Stale resolvers with a correct registry are normal and need no action.

ACM validation only needs step 2. Once the registry is right, `npm run infra:site` will work
even while resolvers are still stale.

## Infrastructure

Two stacks in `us-east-1` (CloudFront requires its ACM cert there):

| Stack | Template | Contents |
| --- | --- | --- |
| `drestin-dns` | `infra/dns.yml` | Route 53 public hosted zone, exports the zone id |
| `drestin-site-prod` | `infra/site.yml` | S3 bucket (private, OAC-only), ACM cert, CloudFront, security headers, A/AAAA alias records |

`drestin.com` is canonical. `www.drestin.com` is an alias on the same distribution and a
CloudFront Function issues a 301 to the apex. 403/404 both rewrite to `/index.html`, so
client-side routing works if you add it later.

**Order matters.** `infra:site` creates an ACM certificate validated over DNS. That
validation cannot succeed until the registrar delegates the domain to the Route 53 zone,
and CloudFormation will sit in `CREATE_IN_PROGRESS` for hours if you run it early.

```sh
npm run infra:dns    # 1. create the zone
                     # 2. set its name servers at the registrar, wait for propagation
npm run infra:site   # 3. cert + bucket + distribution (~5-10 min for CloudFront)
npm run deploy       # 4. build, sync to S3, invalidate
```

## Deploys

`npm run deploy` builds, syncs `dist/` to the bucket, and invalidates the distribution.
Hashed assets are uploaded `immutable` for a year; `index.html`, `robots.txt` and
`sitemap.xml` are uploaded `must-revalidate` so a deploy is visible immediately.

## Shipping

Pushing `main` builds and deploys automatically, via the tracked
[`.githooks/pre-push`](.githooks/pre-push) hook. The hook lives in the repo rather than
`.git/hooks` so it is reviewable, which means a fresh clone has to opt in once:

```sh
git config core.hooksPath .githooks
```

git has no post-push hook, so this runs *before* the refs reach the remote — a failing
build aborts the push, and broken `main` never leaves the machine. The tradeoff is that
the deploy also happens before the push, so a rejected push (a race with another commit)
can leave S3 briefly ahead of `origin/main`; re-pushing reconciles it.

Pushes to any other branch do nothing. If the `drestin-site-prod` stack does not exist
yet, the hook says so and lets the push through rather than blocking it. To push `main`
without shipping:

```sh
SKIP_DEPLOY=1 git push
```
