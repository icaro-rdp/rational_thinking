module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      "dark-blue": "#060117",
      "light-blue": "#010440",
      blue: "#4731d4",
      blue_background: "#4731d487",
      yellow_background: "#d6f2058b",
      "dark-lime": "#6a8c79",
      lime: "#bff205",
      yellow: "#d7f205",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
