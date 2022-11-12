/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode:'class',
  theme: {
    extend: {
      // animation: {
      //   'scale-up-center' : 'scale-up-center 0.4s cubic-bezier (0.390, 0.575, 0.565, 1.00) both'
      // },
      // keyframes: {
      //   'scale-up-center': {
      //     '0%' : { transform: scale(0.5)
      //     },
      //     '100%' : { transform: scale(1)

      //     }
      //   }
      // }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
