/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        tech: ['Space Grotesk', 'monospace'],
      },
      colors: {
        brand: {
          black: '#050505',
          dark: '#0a0a0a',
          gold: '#D4AF37',
          purple: '#8b5cf6',
        }
      }
    },
  },
  plugins: [],
}
