/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#60EAF3",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    extend: {
      screens: {
        xl: { max: "1799px" },
        lg: { max: "1199px" },
        md: { max: "899px" },
        sm: { max: "599px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
