/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': 'rgba(255, 237, 208, 1)',
        'custom-red': 'rgba(231, 57, 68, 1)',
        'custom-blue': 'rgba(232, 236, 249, 1)',
      }
    },
  },
  plugins: [],
}

