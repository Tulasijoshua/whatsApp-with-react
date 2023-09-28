/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkMode: "rgb(17,27,33)",
        grayClr: "rgb(34,46,53)",
        grayBack: "rgb(42,57,66)",
        textClr: "rgb(233,237,239)",
        textWhite: "#fff",
        textGreen: "rgb(0,168,132)",
        textBack: "rgb(32,44,51)",
        hoverClr: "rgb(42,57,66)",
        iconClr: "rgb(174,186,193)",
      }
    },
  },
  plugins: [require("daisyui")],
}