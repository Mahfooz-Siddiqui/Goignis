/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        changeImage: {
          '0%': { 'background-image': 'url("/src/assets/building1.jpg")' },
          '33.33%': { 'background-image': 'url("/src/assets/building2.jpg")' },
          '66.66%': { 'background-image': 'url("/src/assets/building3.jpg")' },
          '100%': { 'background-image': 'url("/src/assets/building1.jpg")' }
        },
      },
      animation: {
        changeImage: 'changeImage 10s infinite',
      },
      colors:{
        customGray:'#F2F2F2',
        cardTextBlue:'#166A81',
        bgColor:'#84aed5',
        bgAboutUs:'#4CA1B2',
      }
    },
  },
  plugins: [require("tailwindcss-animate")]
}
