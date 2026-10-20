/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        charcoal: '#121214',
        panel: '#17171A',
        gold: {
          DEFAULT: '#F5B544',
          soft: '#F7C866',
          deep: '#D99A28',
          50: '#FEF6E7',
        },
        mist: '#F5F5F7',
        haze: '#A1A1AA',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'ui-serif', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.35)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      keyframes: {
        pageFade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        creditSheen: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        creditSpark: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(0.7) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.15) rotate(180deg)' },
        },
        creditUnderline: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'page-fade': 'pageFade 0.3s ease both',
        'credit-sheen': 'creditSheen 3.2s linear infinite',
        'credit-spark': 'creditSpark 2.4s ease-in-out infinite',
        'credit-underline': 'creditUnderline 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
