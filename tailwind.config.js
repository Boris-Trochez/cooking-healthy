/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto condensed", "sans-serif"],
      },
    },
    screens: {
      sm: "640px", // Small screens (mobile)
      md: "768px", // Medium screens (tablets)
      lg: "1024px", // Large screens (laptops)
      xl: "1280px", // Extra-large screens (desktops)
      xl2: "1460px",
    },
  },
  plugins: [],
};
