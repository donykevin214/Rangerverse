/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chalkboard: ['Chalkboard SE', 'sans-serif'],
      },
      backgroundImage: {
        'rv-bg': "url('/RV-BG-TOP-01.jpeg')",
        'rv-bg-1': "url('/RV-bg-01.jpg')",
      }
    },
  },
  plugins: [],
}

