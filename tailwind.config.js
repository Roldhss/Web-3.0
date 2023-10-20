/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Fire': '#C5001A',
        'FireHover': '#8E0013',
        'Light': '#E4E3DB',
        'Denim': '#113743',
        'Concrete': '#C5BEBA',
        'Negro': '#020509',
      }
    },
  },
  plugins: [],
}

