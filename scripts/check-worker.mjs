import assert from 'node:assert/strict';
import worker from '../worker.mjs';
const env={ASSETS:{fetch:async request=>new Response(new URL(request.url).pathname,{status:['/missing/','/__antons-not-found__/'].includes(new URL(request.url).pathname)?404:200})}};
for(const input of ['http://blockeddrainsuppernorthshore.com.au/services/?x=1','https://www.blockeddrainsuppernorthshore.com.au/services/?x=1']){const r=await worker.fetch(new Request(input),env);assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://blockeddrainsuppernorthshore.com.au/services/?x=1');}
assert.equal((await worker.fetch(new Request('https://blockeddrainsuppernorthshore.com.au/404/'),env)).status,404);
assert.equal((await worker.fetch(new Request('https://blockeddrainsuppernorthshore.com.au/missing/'),env)).status,404);
assert.equal((await worker.fetch(new Request('https://preview.example.com/'),env)).headers.get('x-robots-tag'),'noindex, nofollow');
assert.equal((await worker.fetch(new Request('https://blockeddrainsuppernorthshore.com.au/~partytown/partytown-sandbox-sw.html'),env)).headers.get('x-robots-tag'),'noindex, nofollow');
console.log('Worker redirect path/query preservation, explicit and missing 404, and preview noindex tests passed. Live Cloudflare verification still required.');

const notFound=await worker.fetch(new Request('https://blockeddrainsuppernorthshore.com.au/404/'),env);assert.equal(await notFound.text(),'/__antons-not-found__/');assert.equal(notFound.headers.get('location'),null);
