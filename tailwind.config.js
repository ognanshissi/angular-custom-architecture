module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,ts}',
    ]
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
