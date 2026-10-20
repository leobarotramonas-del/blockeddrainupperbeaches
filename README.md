# Antons Blocked Drains Upper North Shore

Astro static website for Antons Plumbing & Gas. NSW contractor licence 210933C. Telephone 0493 824 176.

Repository: https://github.com/leobarotramonas-del/blockeddrainupperbeaches

Canonical domain: https://blockeddrainsuppernorthshore.com.au

Cloudflare Worker: `blockeddrainupperbeaches`. See [deployment record](docs/deployment.md) for the verified public URL and release status. The repository name does not change the approved Upper North Shore branding.

## Local development

Use Node 22.12 or newer. Run `npm ci`, then `npm run dev`. `npm run build` creates a non-indexable preview by default. `npm run preview -- --host 127.0.0.1 --port 4388` serves it locally.

## Production build and deployment

`npm run build:production` enables canonical-domain indexing and runs all source/build checks. `npm run deploy` performs that build and deploys through pinned Wrangler 4.151.2 using your local Cloudflare authentication. Credentials are never committed.

The public workers.dev hostname always receives `X-Robots-Tag: noindex, nofollow` from worker.mjs. The canonical custom domain is connected. HTTP and HTTPS www requests redirect permanently to the HTTPS canonical domain, preserving paths and query strings. Both routes are recorded in wrangler.jsonc. This release does not configure automatic deployment on GitHub push.

## Verification

Build runs Astro diagnostics, all-page metadata/schema/alt-text checks, internal-link checks, asset budgets and Worker behaviour tests. `npm run check:responsive` tests eight routes at five viewport widths using Chrome. `npm run check:lighthouse` checks home, service and locality pages. Browser scripts use http://127.0.0.1:4388/ and the standard Windows Chrome path.

Site facts and service copy live in src/data/site.ts; locality guidance in src/data/areas.ts; service guidance in src/data/service-guidance.ts. CauseExplorer.astro owns the interactive pipe diagram. Photos have descriptive alt text, with no visible photo captions. No analytics or form-submission service is active.

## Dependency assessment

The requested Astro 5 stack is retained. The 20 October 2026 npm audit still reports three toolchain advisories: Astro (critical), sharp (high) and esbuild (low). Compatible fixes were applied. The available complete fix requires a major Astro upgrade.

Production contains prebuilt static files and the small worker.mjs request handler. It does not run Astro SSR, server islands, the development server or an image optimisation/upload endpoint. Build-time images and templates are supplied local files; no untrusted uploads or request values feed rendering. JSON-LD escapes less-than characters; analytics is disabled. These constraints reduce exposure to the reported paths but do not make the dependency audit clean. Keep the development server private and schedule a tested major-version upgrade before adding runtime rendering or untrusted content processing.

## Records

DESIGN.md records the accepted design. docs/evidence.md records locality sources. REPORT.md is the historical design/QA report; docs/deployment.md records publication. The original local folder name is retained for continuity. Other workspace sites are not part of this repository.
