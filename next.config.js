const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const rewriteRoutes = ["/with-rewrite", "/with-rewrite/:slug"];

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  return {
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
        fallback:
          phase === PHASE_DEVELOPMENT_SERVER
            ? rewriteRoutes.map((route) => {
                return {
                  source: route,
                  destination: `/country/US${route}`,
                };
              })
            : rewriteRoutes.map((route) => {
                return {
                  source: route,
                  has: [
                    {
                      type: "header",
                      key: "x-vercel-ip-country",
                      value: "(?<country>.*)",
                    },
                  ],
                  destination: `/country/:country${route}`,
                };
              }),
      };
    },
  };
};

module.exports = nextConfig;
