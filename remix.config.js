/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  mdx: async (filename) => {
    const [rehypePrettyCode] =
      await Promise.all([
        import('rehype-pretty-code').then((mod) => mod.default),
      ]);
    return {
      rehypePlugins: [
        [rehypePrettyCode, { theme: 'one-dark-pro' }],
      ],
    };
  },
};
