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
        'presentation': "url(/images/presentation-bg.jpg)"
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'infinite-scroll': 'infinite-scroll 15s infinite linear'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
       'midnight': '#1E1E1E',
      }
    },
  },
  plugins: [],
}

