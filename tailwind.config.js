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
    },
  },
  plugins: [],
};
