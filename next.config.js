const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseConfig = require('./configWebpack/webpack.config');

const nextConfig = {
  webpack: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      ...baseConfig.resolve,
      alias: {
        ...config.resolve.alias,
        ...baseConfig.resolve.alias,
      },
    },
  }),
};

module.exports = withBundleAnalyzer(nextConfig);
