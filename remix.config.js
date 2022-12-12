const { remarkCodeHike } = require('@code-hike/mdx')
const theme = require('shiki/themes/one-dark-pro.json')

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
  mdx: async (filename) => {
    const [rehypeSlug] = await Promise.all([
      import('rehype-slug').then((mod) => mod.default),
    ])
    return {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [
        [remarkCodeHike, { theme, lineNumbers: true, showCopyButton: true }]
      ]
    }
  }
}
