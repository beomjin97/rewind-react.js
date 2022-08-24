/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#60EAF3",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
