/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { ink: '#0F172A', navy: '#0F172A', paper: '#F8F8F8', gold: '#FFFFFF' },
    fontFamily: { sans: ['Manrope', 'sans-serif'], display: ['Cormorant Garamond', 'serif'] },
    boxShadow: { soft: '0 18px 50px -30px rgba(15,23,42,.32)', card: '0 10px 32px -18px rgba(15,23,42,.24)' }
  } }, plugins: []
}
