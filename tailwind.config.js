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
        neon: {
          DEFAULT: '#3DF0E0',
          soft: '#7CF7EC',
        },
        mist: '#F5F5F7',
        haze: '#A1A1AA',
      },
      fontFamily: {
        display: ['Syne', 'Playfair Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 18px 50px rgba(0, 0, 0, 0.45)',
        card: '0 10px 40px rgba(0, 0, 0, 0.35)',
        glow: '0 0 45px rgba(245, 181, 68, 0.28)',
        'glow-cyan': '0 0 45px rgba(61, 240, 224, 0.20)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.35)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(14px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        'scroll-dot': 'scroll-dot 1.8s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
