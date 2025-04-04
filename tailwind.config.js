/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Amiri', 'serif'],
      },
      colors: {
        palestine: {
          red: '#E4312b',
          green: '#149954',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};