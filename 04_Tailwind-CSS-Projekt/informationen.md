# Projekt starten code für Terminal
npm run watch

# git ignore datei
/node_modules

# Tailwind config js
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
      }

# input css
@layer base {
    h1, h2, h3, h4, h5, h6{
        @apply font-gemunu uppercase;
    }
    a{
        @apply font-gemunu;
    }
}