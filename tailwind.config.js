/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1ed760",
        background: "#121212",
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
    },
  },
  plugins: [],
};
