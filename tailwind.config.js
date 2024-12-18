/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#ff0000',
          600: '#e60000',
          700: '#cc0000',
        },
      },
    },
  },
  plugins: [],
}