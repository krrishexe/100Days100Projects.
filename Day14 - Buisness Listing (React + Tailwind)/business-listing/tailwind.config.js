/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rale' : ['raleway','sans-serif'],
        'quick' : ['Quicksand','sans-serif'],
        'Rogue' : ['Rouge Script','cursive'],
        'Pinyon' : ['Pinyon Script','cursive']
      }
    },
  },
  plugins: [],
}