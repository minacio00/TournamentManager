/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  colors: {
    'shakespeare': {
      '50': '#f3f7fc',
      '100': '#e5eff9',
      '200': '#c6ddf1',
      '300': '#94c1e5',
      '400': '#4d99d2',
      '500': '#3585c2',
      '600': '#256aa4',
      '700': '#1f5585',
      '800': '#1e486e',
      '900': '#1e3d5c',
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
