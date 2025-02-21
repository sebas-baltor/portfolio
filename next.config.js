const { withContentlayer } = require('next-contentlayer');
// import withContentlayer from "next-contentlayer"
/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir: true,
  serverExternalPackages: ["mongoose"],
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
