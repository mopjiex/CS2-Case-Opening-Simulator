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
        '80/100': '80vh',
        '93/100': '93vh',
      },
      width: {
        '4/100': '4vw',
        '96/100' : '96vw',
      },
      margin: { 
        '15vw': '15vw', 
      },
      boxShadow: {
        'custom': '-10px 0px 10px 0px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
