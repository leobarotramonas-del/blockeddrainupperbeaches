import fs from 'node:fs';
const indexing=process.env.PUBLIC_ALLOW_INDEXING==='true';
fs.writeFileSync('public/robots.txt',indexing?'User-agent: *\nAllow: /\nSitemap: https://blockeddrainsuppernorthshore.com.au/sitemap.xml\n':'User-agent: *\nDisallow: /\n');
fs.writeFileSync('public/_headers','/_astro/*\n  Cache-Control: public, max-age=31536000, immutable\n/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n'+(indexing?'':'  X-Robots-Tag: noindex, nofollow\n'));
