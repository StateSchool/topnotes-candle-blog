/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*liquid",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inspiration: ["Inspiration", "cursive"],
        biz: ["BIZ UDPMincho", "serif"],
      },
      colors: {
        neutralBlue: "#9CC0E7",
        neutralGrey: "#A6A6A6",
        offWhite: "#FCFCFC",
        neutralYellow: "#FFEFCF",
        neutralPink: "#F7DBD7",
        newBeige: "#FAF4F2",
        neutralOrange: "#EF9273",
      },
    },
  },
  plugins: [],
};
