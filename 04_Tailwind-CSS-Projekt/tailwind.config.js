/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens:{
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "serif"],
        open: ["Open Sans", "serif"],
      },
      colors: {
        'gega-red':'#BC1A45',
        'gega-melon':'#FFD369',
        'gega-grey':'#DDDDDD',
        'gega-white':'#F7F7F7',
      },
      spacing:{
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

