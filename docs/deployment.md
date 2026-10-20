# Deployment record

Published 20 October 2026 with user authorisation.

- Public site: https://blockeddrainsuppernorthshore.com.au
- Alternate non-indexable URL: https://blockeddrainupperbeaches.antonsplumbingandgas.workers.dev
- GitHub repository: https://github.com/leobarotramonas-del/blockeddrainupperbeaches
- Branch: main
- Worker: blockeddrainupperbeaches
- Commit author: leobarotramonas-del <leobarot.ramonas@gmail.com>
- Canonical custom domain: https://blockeddrainsuppernorthshore.com.au

The canonical custom domain is connected to the Worker. On 20 October 2026, www requests returned 522 origin connection errors. Adding the www.blockeddrainsuppernorthshore.com.au/* Worker route restored the existing permanent redirect to the canonical HTTPS domain. Both routes are persisted in wrangler.jsonc. The workers.dev URL remains deliberately non-indexable. Automatic deployment on GitHub push is not configured; use npm run deploy for subsequent releases with Cloudflare authentication.

Production build checks passed: 36 HTML documents, metadata, schema, internal links, responsive image budgets and Worker tests. Live HTTPS checks covered the homepage, a service page, a locality page, robots, sitemap, image delivery and custom 404 responses. The live check caught an empty explicit /404/ response caused by asset URL canonicalisation; the Worker now requests the normal missing-asset fallback, preserving the themed 404 document.

See deployment-checks.json for live results and README.md for the documented Astro 5 toolchain advisory assessment. Credentials, local QA files, dependency directories and generated dist files are excluded from Git.

## Canonical-domain indexability verification

Live checks on 20 October 2026 confirmed robots.txt and sitemap.xml return HTTP 200. Robots permits all crawlers and references the canonical sitemap. All 35 sitemap URLs return HTTP 200 with indexable robots metadata, no noindex response header, and matching canonical URLs. HTTP and HTTPS www requests for robots, sitemap and a service URL redirect with HTTP 301, preserving paths and query strings. See indexability-checks.json for full results. Search engines determine when eligible pages are indexed.
