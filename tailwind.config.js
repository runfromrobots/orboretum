/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#0d2818',
          800: '#1a3d2e',
          700: '#2d5a47',
          600: '#3d7556',
        },
        moss: '#6b8e6b',
        creek: '#4a7c7e',
        wheat: '#f5f1e8',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
