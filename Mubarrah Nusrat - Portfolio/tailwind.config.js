/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFCFB",
        foreground: "#1A1A1A",
        accent: "#E2D1C3",
        primary: "#D4A373",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
