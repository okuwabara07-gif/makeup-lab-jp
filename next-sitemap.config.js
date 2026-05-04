/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://makeup-lab-jp.vercel.app',
  generateRobotsTxt: false,
  robotsTxtOptions: {
    additionalSitemaps: ['https://makeup-lab-jp.vercel.app/sitemap.xml'],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}
