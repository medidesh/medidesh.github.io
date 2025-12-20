/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            'sea-green': {
                50: '#f0fdf4',
                100: '#dcfce7',
                200: '#bbf7d0',
                300: '#86efac',
                400: '#4ade80',
                500: '#22c55e',
                600: '#2E8B57',
                700: '#15803d',
                800: '#166534',
                900: '#14532d',
            },
            'dark-bg': '#0f172a',
            'dark-card': '#1e293b',
        },
        fontFamily: {
            sans: ['Hind Siliguri', 'sans-serif'],
            heading: ['Hind Siliguri', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
