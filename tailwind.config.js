/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'krumble-purple': '#7e22ce', // You can adjust this hex code to match your exact purple
      }
    },
  },
  plugins: [],
}