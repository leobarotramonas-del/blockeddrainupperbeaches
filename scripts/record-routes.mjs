import fs from 'node:fs';
const pages=fs.readdirSync('dist',{recursive:true}).filter(f=>f.endsWith('.html')).map(f=>{const file=f.replaceAll('\\','/');const html=fs.readFileSync('dist/'+f,'utf8');return {route:file==='index.html'?'/':file==='404.html'?'/404/':'/'+file.replace(/index.html$/,''),title:html.match(/<title>([^<]+)/)?.[1]};});
fs.writeFileSync('docs/routes.json',JSON.stringify(pages,null,2));
