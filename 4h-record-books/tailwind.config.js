/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      'primary': '#339966',
      'primary-dk': '#339966',
      'secondary': '#39d2c0',
      'secondary-dk': '#39d2c0',
      'tertiary': '#ee8b60',
      'tertiary-dk': '#ee8b60',
      'alternate': '#e0e3e7',
      'alternate-dk': '#262d34',
      'txt-primary': '#14181b',
      'txt-primary-dk': '#14181b',
      'txt-secondary': '#57636c',
      'txt-secondary-dk': '#57636c',
      'bg-primary': '#f1f4f8',
      'bg-primary-dk': '#f1f4f8',
      'bg-secondary': '#ffffff',
      'bg-secondary-dk': '#ffffff',
      'accent-primary': '#4C4B39EF',
      'accent-primary-dk': '#4C4B39EF',
      'acc-secondary': '#4d39d2c0',
      'acc-secondary-dk': '#4d39d2c0',
      'acc-tertiary': '#4dee8b60',
      'acc-tertiary-dk': '#4dee8b60',
      'acc-quaternary': '#ccffffff',
      'acc-quaternary-dk': '#b2262d34',
      'success': '#249689',
      'success-dk': '#249689',
      'warning': '#f9cf58',
      'warning-dk': '#f9cf58',
      'error': '#ff5963',
      'error-dk': '#ff5963',
      'info': '#ffffff',
      'info-dk': '#ffffff'
    },
  },
  plugins: [],
};