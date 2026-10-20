import {chromium} from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const origin='http://127.0.0.1:4388';
const routes=['/','/services/','/services/cctv-drain-inspections/','/service-areas/','/service-areas/east-killara/','/about/','/contact/','/404/'];
fs.mkdirSync('qa',{recursive:true});
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true});
const results=[];const errors=[];
for(const width of [320,375,768,1024,1440]){
 const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1}); const page=await context.newPage();
 for(const route of routes){
  await page.goto(origin+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
  await page.evaluate(async()=>{for(const img of document.images){img.loading='eager';}await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
  const layout=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),offenders:[...document.querySelectorAll('main *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).map(e=>e.className).slice(0,8)}));
  if(layout.overflow||layout.images.length)errors.push({width,route,...layout});
  if(width===375||width===1440){
   const name=(route==='/'?'home':route.replaceAll('/','-').replace(/^-|-$/g,''))+'-'+width;
   await page.screenshot({path:'qa/'+name+'.png',fullPage:true}); await page.screenshot({path:'qa/'+name+'-viewport.png'});
   const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
   if(axe.violations.length)errors.push({width,route,axe:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))});
  }
  const faq=page.locator('main details').first();if(await faq.count()){await faq.locator('summary').click();if(!await faq.evaluate(e=>e.open))errors.push({route,width,error:'FAQ did not open'});}
  results.push({route,width,...layout});
 }
 if(width===375){await page.goto(origin);const menu=page.locator('.mobile-menu');await menu.locator('summary').click();if(!await menu.evaluate(e=>e.open))errors.push('menu did not open');await page.keyboard.press('Escape');if(await menu.evaluate(e=>e.open))errors.push('Escape did not close menu');await page.keyboard.press('Tab');}
 await context.close();
}
const page=await browser.newPage();await page.goto(origin);await page.keyboard.press('Tab');const focus=await page.locator(':focus').evaluate(e=>({text:e.textContent,outline:getComputedStyle(e).outlineStyle}));if(!focus.text.includes('Skip')||focus.outline==='none')errors.push({focus});
const phones=await page.locator('a[href^="tel:"]').evaluateAll(a=>a.map(e=>e.getAttribute('href')));if(phones.some(p=>p!=='tel:+61493824176'))errors.push('phone mismatch');
fs.writeFileSync('qa/browser-report.json',JSON.stringify({results,errors,focus,phones},null,2));console.log(JSON.stringify({cases:results.length,errors,focus},null,2));await browser.close();if(errors.length)process.exitCode=1;


