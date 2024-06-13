/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: {
          100: "#6563D2",
          200: "#060606",
          300: "#E0115F",
          400: "#D9D9D9",
          500: "#6A7587",
        },
      },
     
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dim",],
  },
}

