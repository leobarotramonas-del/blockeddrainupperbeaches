const canonicalHost='blockeddrainsuppernorthshore.com.au';
export default {async fetch(request,env){
 const url=new URL(request.url);
 if(url.hostname==='www.'+canonicalHost||(url.hostname===canonicalHost&&url.protocol==='http:')){url.hostname=canonicalHost;url.protocol='https:';return Response.redirect(url.href,301);}
 let response;
 if(url.pathname==='/404/'||url.pathname==='/404'){const assetUrl=new URL('/__antons-not-found__/',url);const asset=await env.ASSETS.fetch(new Request(assetUrl,request));response=new Response(asset.body,{status:404,headers:asset.headers});}
 else response=await env.ASSETS.fetch(request);
 const headers=new Headers(response.headers);
 headers.set('X-Content-Type-Options','nosniff');headers.set('Referrer-Policy','strict-origin-when-cross-origin');
 if(url.hostname!==canonicalHost||url.pathname.startsWith('/~partytown/'))headers.set('X-Robots-Tag','noindex, nofollow');
 if(url.pathname.startsWith('/_astro/'))headers.set('Cache-Control','public, max-age=31536000, immutable');
 return new Response(response.body,{status:response.status,headers});
}};
