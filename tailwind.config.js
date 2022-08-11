/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['"Catalina Rayden"', 'serif'],
    },
    extend: {
      colors: {
        orange: '#FF8A00',
        blue: '#005ECD',
      },
    },
  },
  plugins: [],
};
