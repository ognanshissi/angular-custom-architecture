const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  prefix: '',
  content: [
    './src/**/*.{html,ts, scss}',
  ],
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
  },
  darkMode: 'class',
  theme:  {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Roboto", "Helvetica Neue", "sans-serif", ...defaultTheme.fontFamily.sans]
    },
    screens: {
      ...defaultTheme.screens,
      '2xl': '1280px',
      '3xl': '1280px',
    },
    extends: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
