# Performance update — 21 October 2026

Responsive photographs now use AVIF. The homepage hero and interactive cause illustrations use quality 28 after visual inspection; other responsive images use quality 45. Original source photographs remain unchanged. Image budgets recognize AVIF candidates and fail when no candidates are found.

The 720px homepage hero is 42,453 bytes, compared with approximately 95.5 KiB in the supplied PageSpeed report. The 640px roots illustration is 45,767 bytes, compared with approximately 103 KiB. Widths, heights, responsive selection, loading priority and lazy loading are preserved.

Cloudflare Web Analytics automatic RUM injection was disabled only for blockeddrainsuppernorthshore.com.au in its Cloudflare account settings. This is an external configuration change, not a repository setting. It removes the Cloudflare beacon responsible for the cache-lifetime and legacy-JavaScript warnings. Google Analytics G-LB35W8R8W8 and its existing phone_call_click tracking remain unchanged.

Production build checks pass. The original Google tag loading and section rendering are retained after testing alternatives. Google Analytics still contributes third-party JavaScript and may be flagged for unused code; removing it would remove the requested tracking. Lighthouse scores are lab measurements and can vary across runs.

The fresh remote PageSpeed mobile report scores 79 performance, 100 accessibility, 100 best practices and 100 SEO. LCP is 4.0 seconds versus 4.4 seconds in the supplied report; image savings fall from 109 KiB to 8 KiB. Cache and legacy-JavaScript warnings are removed. The performance score remains below 90; Google Analytics unused JavaScript remains. See performance-checks.json for both remote results and the variable local run.

## Follow-up: remaining PageSpeed warnings

The cause-explorer AVIF quality is now 22. Its 640px roots image is 32,254 bytes (31.5 KiB), down from 45,767 bytes (44.7 KiB), a 29.5% reduction. The hero is unchanged. Removed the separate Barlow 600 download; the browser uses the remaining bold weight. All three used fonts are preloaded to avoid late font discovery.

GA4 now runs through the official Astro Partytown integration, with `gtag` calls forwarded from the main thread. This moves Analytics execution away from rendering; it does not eliminate Google's download. No interaction-gated or delayed page-view trigger is used. Browser checks intercept collection requests and verify exactly one page_view, phone_call_click and generate_lead, including an immediate click before initialization completes. The existing phone key event is retained.

Partytown's internal sandbox is excluded from content-page SEO validation and receives noindex headers. Public pages remain indexable. Build checks verify required worker files. A narrow, fail-closed build compatibility patch adds HTMLFencedFrameElement to Partytown 0.14.5's existing deprecated-API exclusion list, avoiding unnecessary construction of the removed browser element. Revisit this patch when upgrading Partytown.

Trade-off: Partytown adds worker support assets. Its documented page-exit user_engagement delivery can be less reliable than a main-thread tag; page views and explicit phone clicks were verified. See https://partytown.qwik.dev/google-tag-manager/ . Runtime checks can be repeated with `node scripts/check-analytics.mjs <production-or-preview-origin>`; collection is intercepted so checks do not create fake Analytics leads.

The final live mobile PageSpeed run scores 100 performance, 100 accessibility, 100 best practices and 100 SEO; FCP 0.9s, LCP 1.4s, TBT 0ms, CLS 0.007. The image-delivery, unused-JavaScript and font-chain warnings are cleared. Live early-click collection checks pass and all 35 public pages remain indexable. This is a single lab result, not a field-data guarantee. Report: https://pagespeed.web.dev/analysis/https-blockeddrainsuppernorthshore-com-au/4acafztpa6?form_factor=mobile
