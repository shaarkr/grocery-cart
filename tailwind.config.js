const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans] },
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          ...colors.blue,
        },
      },
    },
  },
  plugins: [],
};
