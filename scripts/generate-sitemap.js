const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const BASE_URL = 'https://manu-degan-art.web.app/';

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/biografia', changefreq: 'weekly', priority: 0.8 },
  { url: '/galleria', changefreq: 'weekly', priority: 0.8 },
  { url: '/scuola', changefreq: 'weekly', priority: 0.7 },
  { url: '/contatti', changefreq: 'monthly', priority: 0.6 },
];

const sitemapStream = new SitemapStream({ hostname: BASE_URL });

(async () => {
  const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));
  sitemapStream.pipe(writeStream);

  pages.forEach((page) => sitemapStream.write(page));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log('✅ Sitemap.xml generata con successo!');
})();