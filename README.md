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
