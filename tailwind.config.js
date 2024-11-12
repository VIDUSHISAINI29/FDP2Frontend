/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',  // Custom breakpoint for extra small screens
        '2xl': '1440px', // Custom breakpoint for extra-large screens
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
  prefix: 'tw-'
}

