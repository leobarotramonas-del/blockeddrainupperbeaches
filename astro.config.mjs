import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import partytownCompatibility from './scripts/partytown-compat.mjs';

export default defineConfig({
  integrations: [
    partytown({ config: { forward: ['gtag'], debug: false } }),
    partytownCompatibility(),
  ],
  output: 'static',
  site: 'https://blockeddrainsuppernorthshore.com.au',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
