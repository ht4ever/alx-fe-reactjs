/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to scan your files for Tailwind CSS usage
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
