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
          20:"#232323",
          50:"#191919",
          300:"#141414"
        },
        light:{
          20:"#dfe5e8",
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

