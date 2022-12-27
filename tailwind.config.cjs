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
        'scale-up-center':
          'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'swirl-in-fwd': 'swirl-in-fwd 0.6s ease   both',
        'rotate-in-2-cw':
          'rotate-in-2-cw 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
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
        'scale-up-center': {
          '0%': {
            transform: 'scale(.5)',
          },
          'to': {
            transform: 'scale(1)',
          },
        },
        'swirl-in-fwd': {
          '0%': {
            transform: 'rotate(-540deg) scale(0)',
            opacity: '0',
          },
          'to': {
            transform: 'rotate(0) scale(1)',
            opacity: '1',
          },
        },
        'rotate-in-2-cw': {
          '0%': {
            transform: 'rotate(-45deg)',
            opacity: '0',
          },
          'to': {
            transform: 'rotate(0)',
            opacity: '1',
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
