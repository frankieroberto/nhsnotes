import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'
import rssPlugin from "@11ty/eleventy-plugin-rss"

export default function(eleventyConfig) {

  eleventyConfig.addPlugin(rssPlugin);

  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        text: 'NHSnotes'
      },
      productName: "",
      organisationName: "Frankie Roberto"
    },
    footer: {
      copyright: {
        text: '© 2024'
      },
      contentLicence: {
        text: "This is a personal blog. Views expressed are not necessarily those of the NHS."
      },
      meta: {
        items: [
          {
            href: "/posts/feed.xml",
            text: "Subscribe to feed"
          }
        ]
      }
    },
    icons: {
      touch: 'https://frankieroberto.github.io/nhsnotes/images/icon.png'
    },
    feedUrl: 'posts/feed.xml',
    url: process.env.GITHUB_ACTIONS && 'https://frankieroberto.github.io/nhsnotes/'
  })

  // Collections
  eleventyConfig.addCollection('post', (collection) => {
    return collection.getFilteredByGlob('app/posts/*.md')
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./app/images')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    },
    pathPrefix: process.env.GITHUB_ACTIONS ? '/nhsnotes/' : '/'
  }
};
