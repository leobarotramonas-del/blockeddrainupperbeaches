# Upper North Shore redesign

Brand and canonical domain now match: Antons Blocked Drains Upper North Shore, https://blockeddrainsuppernorthshore.com.au. Corrected on 19 October 2026 at the user’s request. The existing local folder name is retained for continuity.

Compacted the red-and-black design with restrained Barlow headings, a single-row hero, stacked section introductions, consistent grids, reduced section gaps and a four-column suburb directory. At 1440px the homepage is 5603px tall, down from 9101px (38% shorter). Removed visible photo captions while retaining descriptive alt attributes. Real supplied photography and verbatim reviews remain.

Replaced 20 Lower North Shore routes with Upper North Shore locality guides and updated internal links, headings, metadata, FAQ content, service-area schema and sitemap. Eight service pages remain. Other workspace projects were not modified.

## Verification

- Astro check: no errors or warnings. Static build: 36 HTML pages.
- Canonical, metadata, schema, visible FAQ parity, sitemap and alt checks passed.
- All 35 canonical pages are reachable with no orphaned pages or broken internal links.
- Browser checks: eight routes at 320, 375, 768, 1024 and 1440 pixels; 40 cases passed. No broken images or horizontal overflow. Automated axe checks passed at mobile and desktop sizes. Menu, Escape, FAQ disclosure, skip link and call targets passed.
- Worker unit checks and all-page asset budgets passed. Live hosting remains unverified.

| Page | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| home | 93 | 100 | 100 | 69 |
| service | 100 | 100 | 100 | 69 |
| locality | 99 | 100 | 100 | 69 |

Lighthouse uses the local noindex preview build. SEO scores reflect the deliberate indexing restriction. Lab scores vary and do not establish field INP.

## Launch status

No commit, push or deployment. Confirm the repository and Worker identity before launch. Resolve or assess the inherited Astro 5, sharp and esbuild dependency advisories before production; a full upstream fix requires a major Astro upgrade. Verify live domain, TLS, headers, redirects, robots and sitemap after deployment. See README.md for commands and docs/evidence.md for locality sources.

## Routes

- `/404/`
- `/`
- `/about/`
- `/contact/`
- `/privacy/`
- `/service-areas/`
- `/services/`
- `/terms/`
- `/service-areas/asquith/`
- `/service-areas/east-killara/`
- `/service-areas/east-lindfield/`
- `/service-areas/gordon/`
- `/service-areas/hornsby/`
- `/service-areas/killara/`
- `/service-areas/lindfield/`
- `/service-areas/north-turramurra/`
- `/service-areas/north-wahroonga/`
- `/service-areas/pymble/`
- `/service-areas/roseville/`
- `/service-areas/roseville-chase/`
- `/service-areas/south-turramurra/`
- `/service-areas/st-ives/`
- `/service-areas/st-ives-chase/`
- `/service-areas/turramurra/`
- `/service-areas/wahroonga/`
- `/service-areas/waitara/`
- `/service-areas/warrawee/`
- `/service-areas/west-pymble/`
- `/services/blocked-sinks-showers/`
- `/services/blocked-toilets/`
- `/services/cctv-drain-inspections/`
- `/services/drain-repairs/`
- `/services/high-pressure-water-jetting/`
- `/services/sewer-drain-blockages/`
- `/services/stormwater-drains/`
- `/services/tree-root-blockages/`

## Interactive cause guide update
Services now have a pale red background. Four schematic pipe controls reveal related real photography, explanations, symptoms and next steps on hover, focus or tap. Keyboard arrows and Home/End work. Desktop and mobile interaction checks confirmed one active panel and stable section height; the 40-case responsive and accessibility pass passed. Photo captions remain absent. Earlier page-height and Lighthouse figures above predate this additional content.


Updated preview Lighthouse: home performance 90, accessibility 100; service performance 100, accessibility 100; locality performance 99, accessibility 100. SEO remains restricted by intentional noindex.

## Publication update, 20 October 2026
The user authorised GitHub commit and deployment. The earlier local-only launch status is superseded by docs/deployment.md and docs/deployment-checks.json. Public Worker: blockeddrainupperbeaches. Custom-domain routing remains unconfigured because the domain is absent from the authenticated account.

