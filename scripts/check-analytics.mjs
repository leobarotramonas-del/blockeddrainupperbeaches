import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';

// Collection is intercepted: these browser checks never create real GA4 leads.
const origin = process.argv[2] || 'http://127.0.0.1:4391';
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-proxy-server'],
});
try {
  const context = await browser.newContext();
  const events = [];
  await context.route(/https:\/\/[^/]*google-analytics\.com\//, async route => {
    const request = route.request();
    const url = new URL(request.url());
    const rows = request.postData()?.split('\n') || [''];
    for (const row of rows) {
      const params = new URLSearchParams(url.search);
      for (const [key, value] of new URLSearchParams(row)) params.set(key, value);
      if (params.has('en')) events.push(Object.fromEntries(params));
    }
    await route.fulfill({status: 204});
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(origin, {waitUntil: 'domcontentloaded'});
  await page.evaluate(() => document.addEventListener('click', event => {
    if (event.target.closest('a[href^="tel:"]')) event.preventDefault();
  }, true));
  // Click immediately, also exercising the forwarding queue before GA is ready.
  await page.locator('a[href^="tel:"]').first().click();
  const deadline = Date.now() + 30000;
  while (!events.some(event => event.en === 'generate_lead') && Date.now() < deadline) {
    await page.waitForTimeout(250);
  }
  for (const name of ['page_view', 'phone_call_click', 'generate_lead']) {
    const matches = events.filter(event => event.en === name);
    assert.equal(matches.length, 1, `${name} must be sent exactly once`);
    assert.equal(matches[0].tid, 'G-LB35W8R8W8');
  }
  assert(page.workers().length > 0, 'Analytics must execute in a worker');
  assert.deepEqual(errors, []);
  console.log('Analytics worker passed: one page view, phone click and lead; early-click queue preserved; collection intercepted.');
} finally {
  await browser.close();
}
