// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const rules = [
  'User-agent: *\nAllow: /',
  'User-agent: *\nDisallow: /*?token=*/',
  'User-agent: *\nDisallow: /confirmar-email/',
  'User-agent: *\nDisallow: /proximo-passo/',
  `\nSitemap: ${
    process.env.NEXT_PUBLIC_NEXT_ENV === 'production'
      ? `https://www.noverde.com.br/sitemap.xml`
      : `https://dev.noverde.com.br/sitemap.xml`
  }\n`,
]

const crawlableRobotsTxt = rules.reduce((prev, curr) => prev + '\n' + curr)

const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /\nSitemap: ${`www.example.com`}\n`

function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in non-production environments
  const robotsTxt =
    process.env.NEXT_PUBLIC_NEXT_ENV === 'production'
      ? crawlableRobotsTxt
      : uncrawlableRobotsTxt

  // Create robots.txt file
  fs.writeFileSync('public/robots.txt', robotsTxt)

  console.log(
    `Generated a ${
      process.env.NEXT_PUBLIC_NEXT_ENV === 'production'
        ? 'crawlable'
        : 'non-crawlable'
    } public/robots.txt`,
  )
}

module.exports = generateRobotsTxt
