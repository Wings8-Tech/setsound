// Copyright (c) 2025 Wings8 Technology.
// Distributed under the license specified in the root directory of this project.

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#8FA6C7',
          500: '#0A1F4A',
          700: '#061533',
        },
        neutral: {
          950: '#0A0A0A',
          900: '#141414',
          800: '#272727',
          700: '#3A3A3A',
          400: '#A3A3A3',
          100: '#E4E4E7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}