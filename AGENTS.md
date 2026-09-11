# AGENTS.md

Instructions for AI agents working in this repo. Humans: see [README.md](README.md).

This is the website for Dr. Norman Estin ("docmaui"), a practicing physician on Maui. It is
live at <https://drestin.com>. Treat it as a real, public, production site belonging to a real
person — not a sandbox.

## Deploying: push to main. Nothing else.

**`git push` to `main` is the deploy.** GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) builds and ships every commit
that lands on `main`, then smoke-tests the live site. That is the entire deployment procedure.

```sh
git push            # this deploys
```

There is no separate deploy step to run afterwards, and you should not look for one.

**Do not deploy from the local machine.** `npm run deploy:local` exists as a break-glass tool
for when Actions itself is broken. Do not run it as part of normal work: it uses whoever's AWS
credentials happen to be configured, it skips the lint and media checks CI runs, and it makes
the live site diverge from `origin/main` with no record of who did it. If you think you need
it, say so and ask first.

**Do not run `aws s3 sync`, `aws s3 cp`, or `aws cloudfront create-invalidation` by hand**
against the site bucket or distribution. Those are what `scripts/deploy.mjs` does, and doing
them manually produces the same divergence with none of the cache-header handling.

### Before you push

A `pre-push` hook runs `lint`, `check:media` and `build`, and aborts the push if any fail.
Fix the failure rather than bypassing it. `SKIP_CHECKS=1 git push` exists but skipping it just
moves the same failure into CI, where it is slower to diagnose.

The hook lives in tracked `.githooks/` and needs opting into once per clone:

```sh
git config core.hooksPath .githooks
```

If you are in a fresh clone, run that first.

### Confirming a deploy worked

Watch the run, don't guess:

```sh
gh run watch                              # follow the deploy that your push triggered
gh run list --workflow=deploy.yml --limit 5
npm run verify:live                       # smoke-test the live site directly
```

A green sync step alone does not mean the site is serving — that is what `verify:live` is for.

## Where things are

| Path | What it is |
| --- | --- |
| `src/content.js` | **All site copy.** Edit this, not the components. |
| `src/App.jsx` | Components. Reads everything from `content.js`. |
| `public/media/` | Photos and the welcome video. See the README there. |
| `infra/dns.yml` | Route 53 hosted zone (`drestin-dns`) |
| `infra/site.yml` | S3 + CloudFront + ACM + DNS records (`drestin-site-prod`) |
| `infra/cicd.yml` | OIDC deploy role for Actions (`drestin-cicd`) |
| `scripts/` | Deploy, and the media/DNS/live-site checks |

Copy changes almost always belong in `src/content.js` alone. If you find yourself editing
prose inside `App.jsx`, you are in the wrong file.

## Content rules

This is a physician's site. Accuracy is not a style preference here.

- **Do not invent biographical facts, credentials, dates, or affiliations.** If you cannot
  source it, leave a `TODO` and say so in your response. A plausible-sounding fabricated
  credential on a doctor's website is a serious problem.
- **Dr. Estin's own words win.** The welcome letter in `content.js` came from him directly.
  Where it disagrees with a directory listing, news article, or scraped profile, the letter is
  correct — do not "fix" it against an external source.
- **The clinic address and phone are deliberately absent.** Directory listings still carry the
  pre-fire Lahaina address, and the clinics relocated after the August 2023 wildfires.
  Publishing an unverified address sends sick people to the wrong building. Do not add one
  from a directory; it must come from Dr. Estin or the practice.
- **Photos need real `alt` text.** `check:media` fails the build on a photo with a `src` and an
  empty `alt`. Describe what is in the image.
- Keep the medical disclaimer in `contact.note`.

## Infrastructure notes

- Everything is in **us-east-1** — CloudFront requires its ACM certificate there.
- `drestin.com` is canonical. `www` is an alias on the same distribution, 301'd to the apex by
  a CloudFront Function.
- The S3 bucket is private, reachable only through CloudFront via OAC. Keep it that way;
  `verify:live` asserts a direct S3 request returns 403.
- Stack order matters on a rebuild: `dns` → (delegate at registrar) → `site` → `cicd`. The
  cert cannot validate before delegation, and `cicd` imports the site stack's exports.
- `npm run check:dns` diagnoses delegation across the registrar, the registry, and public
  resolvers.

## Things not to do

- Do not make the S3 bucket public.
- Do not commit AWS credentials. Actions authenticates over OIDC; there are no stored keys and
  there should never be.
- Do not widen the deploy role's trust policy beyond `repo:oceanseth/DrEstin.com:ref:refs/heads/main`.
- Do not change `index.html`'s cache headers to `immutable` — deploys would stop being visible
  to returning visitors. `verify:live` checks this.
- Do not force-push `main`.
