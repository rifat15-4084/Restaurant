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
        display: ['Syne', 'Playfair Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
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
      },
      animation: {
        'page-fade': 'pageFade 0.3s ease both',
      },
    },
  },
  plugins: [],
};
