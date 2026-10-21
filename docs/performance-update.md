# Performance update — 21 October 2026

Responsive photographs now use AVIF. The homepage hero and interactive cause illustrations use quality 28 after visual inspection; other responsive images use quality 45. Original source photographs remain unchanged. Image budgets recognize AVIF candidates and fail when no candidates are found.

The 720px homepage hero is 42,453 bytes, compared with approximately 95.5 KiB in the supplied PageSpeed report. The 640px roots illustration is 45,767 bytes, compared with approximately 103 KiB. Widths, heights, responsive selection, loading priority and lazy loading are preserved.

Cloudflare Web Analytics automatic RUM injection was disabled only for blockeddrainsuppernorthshore.com.au in its Cloudflare account settings. This is an external configuration change, not a repository setting. It removes the Cloudflare beacon responsible for the cache-lifetime and legacy-JavaScript warnings. Google Analytics G-LB35W8R8W8 and its existing phone_call_click tracking remain unchanged.

Production build checks pass. The original Google tag loading and section rendering are retained after testing alternatives. Google Analytics still contributes third-party JavaScript and may be flagged for unused code; removing it would remove the requested tracking. Lighthouse scores are lab measurements and can vary across runs.

The fresh remote PageSpeed mobile report scores 79 performance, 100 accessibility, 100 best practices and 100 SEO. LCP is 4.0 seconds versus 4.4 seconds in the supplied report; image savings fall from 109 KiB to 8 KiB. Cache and legacy-JavaScript warnings are removed. The performance score remains below 90; Google Analytics unused JavaScript remains. See performance-checks.json for both remote results and the variable local run.
