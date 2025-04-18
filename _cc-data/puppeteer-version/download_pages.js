const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
  const urls = fs.readFileSync('../urls.txt', 'utf-8')
    .split('\n')
    .map(u => u.trim())
    .filter(u => u);

  const browser = await puppeteer.launch({
    headless: false,  // Set to true once it works
    defaultViewport: null,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const outputDir = path.join(__dirname, 'pages');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`\n[${i + 1}/${urls.length}] Visiting: ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

      // OPTIONAL: Pause if Cloudflare shows a challenge
      if (await page.$('iframe[src*="challenge"]')) {
        console.log('⚠️ Cloudflare challenge detected — solve it manually, then press Enter...');
        await new Promise(resolve => {
          process.stdin.once('data', resolve);
        });
      }

      const html = await page.content();
      const filename = `${i + 1}.html`;
      const filepath = path.join(outputDir, filename);
      fs.writeFileSync(filepath, html, 'utf-8');
      console.log(`✅ Saved: ${filename}`);

    } catch (err) {
      console.error(`❌ Error on ${url}:`, err.message);
    }

    const pause = 3000 + Math.random() * 3000; // 3–6 sec
    console.log(`⏱ Waiting ${Math.round(pause)}ms...\n`);
    await new Promise(resolve => setTimeout(resolve, pause));
  }

  await browser.close();
})();
