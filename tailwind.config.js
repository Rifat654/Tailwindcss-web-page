/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mincho: ["Shippori Mincho", "serif"],
      },
    },
  },
  plugins: [],
};
