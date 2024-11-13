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
        '2xl': '1440px',
        'shadow-my': '0px 4px 8px rgba(21, 99, 85, 0.3)' // Custom breakpoint for extra-large screens
        // Add more custom breakpoints as needed
      },
      boxShadow: {
        'my': '3px 3px 12px 6px rgba(250, 250, 250)', // Custom shadow with teal color
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
  prefix: 'tw-'
}

