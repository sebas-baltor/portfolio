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
        "primary":"#09122F",
       
        "primary-contrast":"#4B5C92",
        "text-dark":"#868DA4",
        "text-light":"#C1C6D6",
        "gray-blue-top":"#1C233C",
        "gray-blue-bot":"#0C1431",
        "light":"#F5F8FF",
        "secondary":"#C5FF1E",
        "secondary-contrast":"#9FD021",
        "background":"#09122F"
      }
    },
  },
  plugins: [],
}
