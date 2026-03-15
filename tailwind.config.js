/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fraud-bg': '#0F1117',
        'card-dark': '#1A1D27',
        'border-subtle': '#2D3148',
        'grid-line': '#1E2235',
        critical: '#EF4444',
        high: '#F59E0B',
        medium: '#EAB308',
        low: '#6B7280',
        safe: '#14B8A6',
        purple: '#A855F7',
        active: '#3B82F6'
      }
    }
  },
  plugins: []
};
