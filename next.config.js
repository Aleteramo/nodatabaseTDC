const createNextIntlPlugin = require('next-intl/plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed experimental.serverActions as it's now default
};

module.exports = createNextIntlPlugin('./i18n.ts')(nextConfig);