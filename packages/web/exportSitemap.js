const fs = require('fs')
const sm = require('sitemap')
const { exportPathMap } = require('./next.config')
const client = require('./client')

client.fetch(`*[_id == "global-config"] {url}[0]`).then(config => {
  exportPathMap().then(res => {
    const sitemap = sm.createSitemap({
      hostname: config.url,
      cacheTime: 600000, // 600 sec (10 min) cache purge period
    })

    //eslint-disable-next-line array-callback-return
    Object.keys(res).map(page => {
      const item = res[page]
      const { includeInSitemap, disallowRobots, _updatedAt } = item
      if (includeInSitemap && !disallowRobots) {
        sitemap.add({ url: page, lastmod: new Date(_updatedAt) })
      }
    })

    fs.writeFile(`./out/sitemap.xml`, sitemap.toString(), err => {
      if (err) throw err
      console.log(`sitemap.xml updated`) //eslint-disable-line no-console
    })
  })
})