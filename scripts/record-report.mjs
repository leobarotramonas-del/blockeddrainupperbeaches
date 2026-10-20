import fs from 'node:fs';
const lh=JSON.parse(fs.readFileSync('qa/lighthouse-summary.json'));
fs.copyFileSync('qa/lighthouse-summary.json','docs/lighthouse-summary.json');
fs.copyFileSync('qa/browser-report.json','docs/browser-report.json');
fs.copyFileSync('qa/budgets.json','docs/performance-budgets.json');
const routes=JSON.parse(fs.readFileSync('docs/routes.json'));
fs.writeFileSync('REPORT.md',[
'# Upper North Shore redesign',
'',
'Brand and canonical domain now match: Antons Blocked Drains Upper North Shore, https://blockeddrainsuppernorthshore.com.au. Corrected on 19 October 2026 at the user’s request. The existing local folder name is retained for continuity.',
'',
'Compacted the red-and-black design with restrained Barlow headings, a single-row hero, stacked section introductions, consistent grids, reduced section gaps and a four-column suburb directory. At 1440px the homepage is 5603px tall, down from 9101px (38% shorter). Removed visible photo captions while retaining descriptive alt attributes. Real supplied photography and verbatim reviews remain.',
'',
'Replaced 20 Lower North Shore routes with Upper North Shore locality guides and updated internal links, headings, metadata, FAQ content, service-area schema and sitemap. Eight service pages remain. Other workspace projects were not modified.',
'',
'## Verification',
'',
'- Astro check: no errors or warnings. Static build: 36 HTML pages.',
'- Canonical, metadata, schema, visible FAQ parity, sitemap and alt checks passed.',
'- All 35 canonical pages are reachable with no orphaned pages or broken internal links.',
'- Browser checks: eight routes at 320, 375, 768, 1024 and 1440 pixels; 40 cases passed. No broken images or horizontal overflow. Automated axe checks passed at mobile and desktop sizes. Menu, Escape, FAQ disclosure, skip link and call targets passed.',
'- Worker unit checks and all-page asset budgets passed. Live hosting remains unverified.',
'',
'| Page | Performance | Accessibility | Best practices | SEO |',
'| --- | ---: | ---: | ---: | ---: |',
...lh.map(r=>`| ${r.name} | ${r.scores.performance} | ${r.scores.accessibility} | ${r.scores['best-practices']} | ${r.scores.seo} |`),
'',
'Lighthouse uses the local noindex preview build. SEO scores reflect the deliberate indexing restriction. Lab scores vary and do not establish field INP.',
'',
'## Launch status',
'',
'No commit, push or deployment. Confirm the repository and Worker identity before launch. Resolve or assess the inherited Astro 5, sharp and esbuild dependency advisories before production; a full upstream fix requires a major Astro upgrade. Verify live domain, TLS, headers, redirects, robots and sitemap after deployment. See README.md for commands and docs/evidence.md for locality sources.',
'',
'## Routes',
'',
...routes.map(r=>'- `'+r.route+'`'),''
].join('\n'));
