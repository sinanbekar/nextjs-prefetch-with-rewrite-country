const rewriteRoutes = [
  '/with-rewrite',
  '/with-rewrite/:slug'
]

module.exports = {
  async rewrites() {
    return {
      afterFiles: rewriteRoutes.map((route) => {
        return {
          source: route,
          has: [
            {
              type: 'header',
              key: 'accept-language',
              value: '(?<language>.*)',
            },
          ],
          destination: `/language/:language${route}`,
        };
      }),
    };
  },
}
