const rewriteRoutes = ["/with-rewrite", "/with-rewrite/:slug"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: rewriteRoutes.map((route) => {
        return {
          source: route,
          has: [
            {
              type: "cookie",
              key: "country",
              value: "(?<country>.*)",
            },
          ],
          destination: `/country/:country${route}`,
        };
      }),
      fallback: rewriteRoutes.map((route) => {
        return {
          source: route,
          destination: `/country/US${route}`,
        };
      }),
    };
  },
};

module.exports = nextConfig;
