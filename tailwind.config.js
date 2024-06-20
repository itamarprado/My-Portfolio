/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif']
      },
      backgroundImage: {
        'presentation': "url(images/presentation-bg.jpg)"
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite'
      }
    },
  },
  plugins: [],
}

