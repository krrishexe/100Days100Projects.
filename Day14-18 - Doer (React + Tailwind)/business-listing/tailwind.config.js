/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'apo' : ['apologue','sans-serif'],
        'rale' : ['raleway','sans-serif'],
        'quick' : ['Quicksand','sans-serif'],
        'Rogue' : ['Rouge Script','cursive'],
        'Pin' : ['Pinyon Script','cursive']
      }
    },
  },
  plugins: [],
}