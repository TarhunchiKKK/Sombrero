/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'main-gradient': {
          DEFAULT: 'linear-gradient(90deg, #8d90e3,#9ec0ea,#8d90e3)',
          light: 'linear-gradient(90deg, #8d90e3,#9ec0ea,#8d90e3)',
          dark: 'linear-gradient(90deg, #c773fd,#3d0084)',
        } 
      },
    },
  },
  plugins: [],
}