module.exports = {
  prefix: '',
  content: [
    './src/**/*.{html,ts}',
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
  },
  darkMode: 'class',
  theme:  {
    extends: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
