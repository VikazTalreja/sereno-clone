/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sereno-green': '#00E676', // The bright green color from the Sereno logo
        'sereno-blue': '#111827', // The dark blue used in the buttons
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 