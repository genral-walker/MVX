/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      head: ['"Catalina Rayden"', 'serif'],
    },
    extend: {
      colors: {
        orange: '#FF8A00',
        blue: '#005ECD',
        black: '#333333,',
      },
      backgroundImage: {
        'hero-bg': "url('assets/images/hero-bg.svg')",
      },
      screens: {
        300: '300px',
        320: '320px',
        330: '330px',
        350: '350px',
        375: '375px',
        400: '400px',
        xs: '425px',
        475: '475px',
        520: '520px',
        580: '580px',
        700: '700px',
        800: '800px',
        820: '820px',
        900: '900px',
        950: '950px',
        1000: '1000px',
        1050: '1050px',
        1100: '1100px',
        1150: '1150px',
        1200: '1200px',
        1300: '1300px',
        1350: '1350px',
        1400: '1400px',
        1450: '1450px',
        1600: '1600px',
        1700: '1700px',
        1800: '1800px',
      },
    },
  },
  plugins: [],
};
