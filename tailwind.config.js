/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-color": "#bc2c1f",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacitynav: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      boxShadow: {
        bottom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom bottom shadow
      },
      scrollbar:{
        
      }
    },
  },
  plugins: [],
};
