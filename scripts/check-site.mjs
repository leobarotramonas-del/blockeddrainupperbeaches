import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const origin = 'https://blockeddrainsuppernorthshore.com.au';
const htmlFiles = [];
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
  const file = path.join(dir, entry.name);
  if (entry.isDirectory()) walk(file); else if (entry.name.endsWith('.html')) htmlFiles.push(file);
});
walk(root);

const errors = [];
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const expectedUrls = [];
const allowIndexing = process.env.PUBLIC_ALLOW_INDEXING === 'true';
const titles = new Set(), descriptions = new Set();
const pageSchemaIds = new Set();

for (const file of htmlFiles) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const is404 = relative === '404.html' || relative === '404/index.html';
  const route = relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '/').replace(/\.html$/, '/')}`;
  const expected = `${origin}${route}`;
  const html = fs.readFileSync(file, 'utf8');
  const titleValue=html.match(/<title>([^<]+)<\/title>/)?.[1];
  const descValue=html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  if(titles.has(titleValue)||descriptions.has(descValue)) errors.push(relative+': duplicate metadata');
  titles.add(titleValue);descriptions.add(descValue);
  if(!allowIndexing&&!html.includes('noindex,nofollow')) errors.push(relative+': missing preview noindex');
  if(/Lower North Shore|drain-hero__note|Antons Enterprises|—|25\+|25 years|Hills District/.test(html)) errors.push(relative+': forbidden or inherited copy');
  const count = (pattern) => [...html.matchAll(pattern)].length;
  if (!is404) {
    if (allowIndexing) expectedUrls.push(expected);
    if (!html.includes(`<link rel="canonical" href="${expected}"`)) errors.push(`${relative}: wrong canonical`);
    if (!html.includes(`<link rel="alternate" hreflang="en-AU" href="${expected}"`)) errors.push(`${relative}: missing en-AU alternate`);
    if (!html.includes(`<link rel="alternate" hreflang="x-default" href="${expected}"`)) errors.push(`${relative}: missing x-default alternate`);
  }
  if (count(/<h1\b/gi) !== 1) errors.push(`${relative}: expected one H1`);
  if (count(/<title>[^<]+<\/title>/gi) !== 1) errors.push(`${relative}: expected one title`);
  if (count(/<meta name="description" content="[^"]+"/gi) !== 1) errors.push(`${relative}: expected one meta description`);
  if (!html.includes('<html lang="en-AU">')) errors.push(`${relative}: missing en-AU language`);
  if (/pages\.dev|workers\.dev|localhost/.test(html)) errors.push(`${relative}: preview URL leaked`);
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt(?:="[^"]*"|(?=\s|>))/.test(tag)) errors.push(`${relative}: image lacks alt`);
  for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = match[1];
    if (!href || href === '/' || /\.[a-z0-9]+$/i.test(href) || href.endsWith('/')) continue;
    errors.push(`${relative}: internal page link lacks trailing slash: ${href}`);
  }
  try {
    const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    const nodes = scripts.flatMap((m) => { const data = JSON.parse(m[1]); return data['@graph'] ?? [data]; });
    for (const type of ['WebPage', 'WebSite', 'Plumber']) if (nodes.filter((node) => [node['@type']].flat().includes(type)).length !== 1) errors.push(`${relative}: expected one ${type} schema node`);
    const pageNode = nodes.find((node) => [node['@type']].flat().includes('WebPage'));
    if (pageNode?.['@id'] !== `${expected}#webpage` || pageNode?.url !== expected) errors.push(`${relative}: page schema does not match canonical URL`);
    if (pageSchemaIds.has(pageNode?.['@id'])) errors.push(`${relative}: duplicate page schema ID`);
    pageSchemaIds.add(pageNode?.['@id']);
    if(faqNodeCheck(nodes,html)) errors.push(relative+': FAQ schema differs from visible content');
    const ids = nodes.map((node) => node['@id']).filter(Boolean);
    if (new Set(ids).size !== ids.length) errors.push(`${relative}: duplicate schema node ID`);
    const serviceNode = nodes.find((node) => node['@type'] === 'Service');
    if (serviceNode && (serviceNode['@id'] !== `${expected}#service` || serviceNode.url !== expected || serviceNode.mainEntityOfPage?.['@id'] !== `${expected}#webpage`)) errors.push(`${relative}: service schema is not page-specific`);
    const faqNode = nodes.find((node) => node['@type'] === 'FAQPage');
    if (faqNode && (faqNode['@id'] !== `${expected}#faq` || faqNode.isPartOf?.['@id'] !== `${expected}#webpage`)) errors.push(`${relative}: FAQ schema is not page-specific`);
    if (relative.startsWith('service-areas/') && serviceNode && relative !== 'service-areas/index.html') {
      const suburb = relative.split('/')[1];
      const locality = serviceNode.areaServed?.address?.addressLocality;
      if (!locality || locality.toLowerCase().replaceAll(' ', '-') !== suburb || !serviceNode.areaServed?.address?.postalCode) errors.push(`${relative}: missing local service schema details`);
    }
    if (nodes.some((node) => ['AggregateRating', 'Review'].includes(node['@type']))) errors.push(`${relative}: unapproved review schema`);
  } catch (error) { errors.push(`${relative}: invalid JSON-LD: ${error.message}`); }
}

if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push('sitemap.xml: duplicate URLs');
if (expectedUrls.some((url) => !sitemapUrls.includes(url)) || sitemapUrls.some((url) => !expectedUrls.includes(url))) errors.push('sitemap.xml: route mismatch');
if (errors.length) { console.error([...new Set(errors)].join('\n')); process.exit(1); }
console.log(`Checked ${htmlFiles.length} HTML files: canonicals, hreflang, metadata, H1s, alt text, trailing links, schema and sitemap passed.`);

function faqNodeCheck(nodes,html){const visible=html.replace(/<script[\s\S]*?<\/script>/gi,'').replaceAll('&amp;','&').replaceAll('&#39;',"'").replaceAll('&quot;','"');const faq=nodes.find(n=>n['@type']==='FAQPage');return faq?.mainEntity.some(q=>!visible.includes(q.name)||!visible.includes(q.acceptedAnswer.text));}
