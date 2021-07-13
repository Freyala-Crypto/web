module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#7fca49',
        'primary-alt': '#54b67a',
        'secondary': '#27a2ac',
        'gray': '#0d5651'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
