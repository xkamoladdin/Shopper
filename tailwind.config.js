/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:'15px'
    },

    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      '2xl':'1290px'
    },
    fontFamily: {
      'montserrat': ['Montserrat']
    },
    extend: {},
  },
  plugins: [],
}

