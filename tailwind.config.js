module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#326295',
        secondary: '#5ac1a7'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
