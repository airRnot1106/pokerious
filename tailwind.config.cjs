/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'light-black': '#333333',
      },
      animation: {
        'slide-in-left':
          'slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-out-bck-center':
          'slide-out-bck-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'pulsate-fwd': 'pulsate-fwd 0.5s ease   both',
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-1000px)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-out-bck-center': {
          '0%': {
            transform: 'translateZ(0)',
            opacity: '1',
          },
          'to': {
            transform: 'translateZ(-1100px)',
            opacity: '0',
          },
        },
        'pulsate-fwd': {
          '0%,to': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['garden'],
  },
};
