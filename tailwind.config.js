/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // xs: "36em",
        // sm: "48em",
        // md: "62em",
        // lg: "75em",
        // xl: "88em",
        mdOnly: { min: "768px", max: "1023px" }, // sm 到 lg-1
      },
    },
  },
  plugins: [],
};
