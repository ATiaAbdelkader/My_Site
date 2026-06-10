/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/*.js', './ops/**/*.{html,js}', './404.html', './privacy.html', './terms.html'],
  theme: {
    extend: {
      fontFamily: { cairo: ['Cairo', 'sans-serif'], poppins: ['Poppins', 'sans-serif'] },
      colors: {
        navy: { 900: '#0a0e27', 800: '#0f1538', 700: '#151d4a', 600: '#1b2660' },
        cyan: { 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2' },
        gold: { 400: '#fbbf24', 500: '#f59e0b' }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'spin-slow': 'spin 0.8s linear infinite',
      },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        gradientShift: { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
      }
    }
  },
  plugins: [],
};
