/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'light': '0 0px 10px rgb(255,255,255)'
      },
      dropShadow:{
        'light': '0 0px 10px rgba(148, 163, 184)',
        'dark': '0px 0px 5px rgba(0, 0, 0, 0.7)'

      }
    },
  },
  plugins: [],
}

