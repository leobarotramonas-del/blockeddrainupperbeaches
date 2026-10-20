import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const images = [...home.matchAll(/<img\b[^>]*>/g)].map(([tag]) => tag);
for (const image of images) {
  assert.match(image, /\bsrcset="[^"]+"/, 'Homepage images need responsive candidates');
  assert.match(image, /\bsizes="[^"]+"/, 'Homepage images need display sizes');
  for (const match of image.matchAll(/\/_astro\/[^\s",]+\.webp/g)) {
    assert.ok(fs.existsSync(path.join(root, match[0])), `Missing image: ${match[0]}`);
  }
}
const hero = images.find((image) => image.includes('blocked-drains'));
assert.ok(hero, 'Hero drain image must be discoverable in initial HTML');
assert.match(hero, /fetchpriority="high"/);
assert.match(hero, /loading="eager"/);
assert.doesNotMatch(home, /<iframe\b/, 'Homepage must not eagerly load third-party embeds');
assert.doesNotMatch(home, /<link\b[^>]*rel="stylesheet"/, 'Initial styles should be inline');
assert.equal([...home.matchAll(/as="font"/g)].length, 2, 'Only critical body and heading fonts are preloaded');
assert.ok(fs.statSync(path.join(root, 'index.html')).size < 250_000, 'Homepage HTML should remain compact');
console.log('Performance checks passed: responsive images, eager LCP asset, no eager embeds, inline CSS and two font preloads.');
