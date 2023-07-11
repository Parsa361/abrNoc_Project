/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgBlue': '#F1F9FE',
        'grey': '#9E9E9E',
        'greyLighten': '#BDBDBD',
        'greyLightenLine': '#E0E0E0',
        'textPrimary': '#2F3857',
        'activeBlue': '#2C5EFF',
        'greenBtn': '#00CD82',
        'borderDisabled': '#0000001F',
        'textDisabled': '#00000042',
      },
      maxWidth: {
        'container': '1366px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        base: '1rem',
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
};
