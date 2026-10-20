# Deployment record

Published 20 October 2026 with user authorisation.

- Public site: https://blockeddrainupperbeaches.antonsplumbingandgas.workers.dev
- GitHub repository: https://github.com/leobarotramonas-del/blockeddrainupperbeaches
- Branch: main
- Worker: blockeddrainupperbeaches
- Commit author: leobarotramonas-del <leobarot.ramonas@gmail.com>
- Intended custom domain: https://blockeddrainsuppernorthshore.com.au

The custom domain was not found in the authenticated Cloudflare account, so no DNS or custom-domain routing was changed. The public workers.dev site is accessible but deliberately non-indexable. Canonicals and sitemap retain the approved Upper North Shore domain. Automatic deployment on GitHub push is not configured; use npm run deploy for subsequent releases with Cloudflare authentication.

Production build checks passed: 36 HTML documents, metadata, schema, internal links, responsive image budgets and Worker tests. Live HTTPS checks covered the homepage, a service page, a locality page, robots, sitemap, image delivery and custom 404 responses. The live check caught an empty explicit /404/ response caused by asset URL canonicalisation; the Worker now requests the normal missing-asset fallback, preserving the themed 404 document.

See deployment-checks.json for live results and README.md for the documented Astro 5 toolchain advisory assessment. Credentials, local QA files, dependency directories and generated dist files are excluded from Git.
