// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(15px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        fadeUpDelay1: 'fadeUp 0.8s ease-out 0.2s forwards',
        fadeUpDelay2: 'fadeUp 0.8s ease-out 0.4s forwards',
        floatY: 'floatY 4s ease-in-out infinite',
        floatX: 'floatX 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
