module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          "900_0a": "#0000000a",
          "900_3f": "#0000003f",
          "900_00": "#00000000",
        },
        gray: {
          100: "#f2f2f2",
          300: "#e4e5e5",
          400: "#b0b1b3",
          500: "#959799",
          900: "#181919",
          "900_01": "#1d2129",
          "300_7f": "#e4e5e57f",
          "100_99": "#f2f2f299",
        },
        green: { "800_ce": "#1ea810ce" },
        blue_gray: { 100: "#cacbcc", "900_1e": "#18274b1e" },
        deep_purple: { 800: "#2f14d0" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 1px  1px 0px #0000000a",
        bs1: "0px 14px  64px -4px #18274b1e",
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "radial-gradient(#1ea810ce,#2f14d0,#00000000)",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
