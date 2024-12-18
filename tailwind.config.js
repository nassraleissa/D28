/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',
        'secondary': '#10B981',
        'accent': '#6366F1'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
