/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",  // Club Green
        secondary: "#0E7C3A"  // White
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
