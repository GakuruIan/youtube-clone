/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          50:"#1F1F26",
          100:"#16151C",
          200:"#222",
          300:"#14131a"
        },
        light:{
          50:"#EFEFF5"
        }
      },
      fontFamily:{
          saira:['Saira Condensed','sans serif'],
          poppins:['poppins','sans serif']
      } 
    },
  },
  plugins: [],
}

