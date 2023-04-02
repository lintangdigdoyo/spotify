/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2ebd59",
        background: "#121212",
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
    },
    animation: {
      "cross-right": "cross-right .8s both",
    },
    keyframes: {
      "cross-right": {
        "0%": {
          right: "50%",
          width: "20px",
          height: "20px",
        },
        "100%": {
          right: "50%",
          width: "80px",
          height: "80px",
        },
      },
    },
  },
  plugins: [],
};
