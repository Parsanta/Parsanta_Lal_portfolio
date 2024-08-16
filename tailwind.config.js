/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-400': '#00bcd4',
        'green-400': '#4caf50',
        'purple-400': '#9c27b0',
        'gray-900': '#1a1a1a',
        'gray-300': '#d3d3d3',
      },
      keyframes: {
        'border-shine': {
          '0%': { 'border-color': 'purple' },
          '50%': { 'border-color': 'gray' },
          '100%': { 'border-color': 'purple' },
        },
      },
      animation: {
        'border-shine': 'border-shine 3s linear infinite',
      },
    },
  },
  plugins: [],
}