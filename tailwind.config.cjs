/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'light-black': '#333333',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {},
};
