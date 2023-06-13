/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

async function generateSitemap() {
  const links = []

  // Add other pages
  const pages = ['/']
  pages.map((url) =>
    links.push({
      url,
      changefreq: 'daily',
      priority: 0.9,
    }),
  )

  // Create a stream to write to
  const siteUrl = 'www.example.com'

  const stream = new SitemapStream({
    hostname: siteUrl,
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data) => data.toString())
  // Create sitemap file

  fs.writeFileSync('public/sitemap.xml', xmlString)

  console.log('Generated public/sitemap.xml')
}

module.exports = generateSitemap
