/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Condensed', 'sans-serif'],
      },
      height: {
        '7/100': '7vh',
      },
      width: {
        '95/100' : '95vw',
      },
      marginRight: {
        '15vw': '15vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
