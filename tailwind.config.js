/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-green-300',
    'bg-sky-300',
    'bg-pink-300',
    'bg-red-300',
    'bg-orange-300',
    'bg-violet-300',
    'bg-rose-300',
  ]
}

