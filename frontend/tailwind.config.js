/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#e6b300',
          600: '#b38a00',
          700: '#806200',
          800: '#4d3a00',
          900: '#1a1300',
        },
        primary: {
          DEFAULT: '#ffc91a',
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#e6b300',
          600: '#b38a00',
          700: '#806200',
          800: '#4d3a00',
          900: '#1a1300',
        }
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
