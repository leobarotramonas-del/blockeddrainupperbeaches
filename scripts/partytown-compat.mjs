import fs from 'node:fs/promises';

// Partytown 0.14.5 already skips deprecated Privacy Sandbox APIs during
// introspection, but omits HTMLFencedFrameElement. Extend that same exclusion
// rather than constructing a deprecated element that GA4 does not need.
// Fail on library changes so a dependency upgrade requires reviewing this patch.
export default function partytownCompatibility() {
  return {
    name: 'partytown-fenced-frame-compatibility',
    hooks: {
      'astro:build:done': async ({dir}) => {
        for (const name of ['partytown-sandbox-sw.html', 'partytown-atomics.js', 'partytown-sw.js']) {
          const file = new URL(`~partytown/${name}`, dir);
          const source = await fs.readFile(file, 'utf8');
          const match = 'new Set(["sharedStorage","SharedStorage",';
          if (source.split(match).length !== 2) throw new Error(`Review Partytown compatibility patch: ${name}`);
          await fs.writeFile(file, source.replace(match, 'new Set(["HTMLFencedFrameElement","sharedStorage","SharedStorage",'));
        }
      },
    },
  };
}

