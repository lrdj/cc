const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlDir = path.join(__dirname, 'pages'); // adjust if your HTML is elsewhere
const output = new Set();

fs.readdirSync(htmlDir).forEach(file => {
  if (file.endsWith('.html')) {
    const fullPath = path.join(htmlDir, file);
    const html = fs.readFileSync(fullPath, 'utf-8');
    const $ = cheerio.load(html);

    $('img').each((i, el) => {
      const src = $(el).attr('src');
      if (src) output.add(src);
    });
  }
});

const sorted = [...output].sort();
fs.writeFileSync('images.txt', sorted.join('\n'));

console.log(`✅ Found ${output.size} unique image URLs.`);
console.log(`📝 Saved to images.txt`);
