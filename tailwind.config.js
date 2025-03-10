/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008ee6',
        'primary-subtle': '#e5e7eb',
        'secondary': '#facc15',
        'secondary-subtle': '#fef08a',
        'danger': '#ef4444',
        'danger-subtle': '#fca5a5'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}