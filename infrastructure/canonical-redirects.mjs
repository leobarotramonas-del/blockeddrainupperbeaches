// Only bound to the verified www and HTTP routes listed in wrangler.canonical-redirects.jsonc.
const hosts = new Set([
  'thehillsdistrictplumber.com.au',
  'thenorthenbeachesplumber.com.au',
  'blockeddrainshillsdistrict.com.au',
  'blockeddrainslowernorthshore.com.au',
]);
export default {
  fetch(request) {
    const url = new URL(request.url);
    const preferred = url.hostname.replace(/^www\./, '');
    if (!hosts.has(preferred)) return new Response('Unknown hostname', { status: 404 });
    url.protocol = 'https:';
    url.hostname = preferred;
    url.port = '';
    return Response.redirect(url.href, 301);
  },
};
