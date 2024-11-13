/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steam: {
          orange: '#ff9e1b',
          blue: '#0050a2',
          red: '#d9001a',
          white: '#faf9f6',
          black: '#000000',
        },
        primary: {
          50: '#faf9f6',
          100: '#fff3e0',
          500: '#ff9e1b',
          600: '#f59000',
          700: '#e68600',
        },
        secondary: {
          50: '#e5f0ff',
          500: '#0050a2',
          600: '#004892',
          700: '#003d7a',
        },
        accent: {
          500: '#d9001a',
          600: '#c30018',
          700: '#b10015',
        },
        neutral: {
          50: '#faf9f6',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
