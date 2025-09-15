/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdOnly: { min: "768px", max: "1023px" }, // sm 到 lg-1
      },
    },
  },
  plugins: [],
};
