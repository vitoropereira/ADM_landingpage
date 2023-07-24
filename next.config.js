const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 클라이언트 사이드에서 사용되는 경우 fs 모듈 제외
      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
