/** @type {import('next').NextConfig} */

// Example next.config.js for handling fonts
const withFonts = require('next-fonts');

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
})

module.exports = withPWA(withFonts({
    webpack(config, options) {
      return config;
    },
  }));
