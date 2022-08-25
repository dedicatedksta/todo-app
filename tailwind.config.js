/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#5AFF31',
        mainColor:'#25273C',
        complete:'#0F90A1',
        incomplete:'#484040',
        bordercolor:'#AD02FE'
      }
    },
  },
  plugins: [],
}
