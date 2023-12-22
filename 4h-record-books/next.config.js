/** @type {import('next').NextConfig} */

// Example next.config.js for handling fonts
const withFonts = require('next-fonts');

module.exports = withFonts({
    webpack(config, options) {
      return config;
    },
  });





