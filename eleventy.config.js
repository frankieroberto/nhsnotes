const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

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
      meta: {
        items: [
          {
            href: "/posts/feed.xml",
            text: "Subscribe to feed"
          }
        ]
      }
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
