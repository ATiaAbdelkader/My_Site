const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://abdelkader-atia.com';

const PAGES = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/index-en.html', priority: '0.9', changefreq: 'monthly' },
  { path: '/404.html', priority: '0.1', changefreq: 'yearly' },
  { path: '/privacy.html', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms.html', priority: '0.3', changefreq: 'yearly' },
];

function generateSitemap() {
  const root = path.resolve(__dirname, '..');
  const today = new Date().toISOString().split('T')[0];

  const urls = PAGES.map(page => `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`;

  const sitemapPath = path.join(root, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`Sitemap generated: ${sitemapPath} (${PAGES.length} URLs)`);
}

generateSitemap();
