function isVercelDeploy() {
  return (
    process.env.VERCEL_ENV === 'production' ||
    process.env.VERCEL_ENV === 'preview'
  );
}

const rewriteRoutes = [
  '/with-rewrite',
  '/with-rewrite/:slug'
]

module.exports = {
  async rewrites() {
    return {
      afterFiles: rewriteRoutes.map((route) => {
        return isVercelDeploy()
          ? {
              source: route,
              has: [
                {
                  type: 'header',
                  key: 'x-vercel-ip-country',
                  value: '(?<country>.*)',
                },
              ],
              destination: `/country/:country${route}`,
            }
          : {
              source: route,
              // Bake in a country code in development since there will not be
              // a country header.
              destination: `/country/US${route}`,
            };
      }),
    };
  },
}
