/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1B2C62",
        "primary-contrast":"#4B5C92",
        // "secondary":"#F5626C",
        // "secondary-contrast":"#F2535E",
        "light":"#F5F8FF",
        // "primary":"#126678",
        // "primary-contrast":"#047683",
        "secondary":"#BDFF00",
        "secondary-contrast":"#C5FF1E",
        // "light":"#F8F8F8"
      }
    },
  },
  plugins: [],
}
