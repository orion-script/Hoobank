/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { background: " #00040F", back: "#14101D" },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
};
