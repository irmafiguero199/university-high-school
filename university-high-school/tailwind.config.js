/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 50:'#eef4ff',100:'#dbe7fe',200:'#bfd3fe',300:'#93b4fd',400:'#608afa',500:'#3b63f6',600:'#2544eb',700:'#1d32d8',800:'#1e2aaf',900:'#1e288a',950:'#172054' },
        gold: { 400:'#f5c14e',500:'#eea71c',600:'#d98507' },
        ink: '#0f172a'
      },
      fontFamily: {
        sans: ['Inter','Roboto','system-ui','sans-serif'],
        serif: ['"Source Serif 4"','Georgia','serif']
      }
    }
  },
  plugins: []
}
