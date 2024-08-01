/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      //custom animations
      keyframes: {
        'rotate-scale-wave-1': {
          '0%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-20px) scale(1.2) rotate(15deg)',
          },
          '50%': {
            transform: 'translateY(10px) scale(0.8) rotate(-15deg)',
          },
          '75%': {
            transform: 'translateY(-15px) scale(1.1) rotate(10deg)',
          },
          '100%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
          },
        },
        'rotate-scale-wave-2': {
          '0%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-20px) scale(1.2) rotate(15deg)',
          },
          '50%': {
            transform: 'translateY(10px) scale(0.8) rotate(-15deg)',
          },
          '75%': {
            transform: 'translateY(-15px) scale(1.1) rotate(10deg)',
          },
          '100%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
          },
        },
        'rotate-scale-wave-3': {
          '0%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-20px) scale(1.2) rotate(15deg)',
          },
          '50%': {
            transform: 'translateY(10px) scale(0.8) rotate(-15deg)',
          },
          '75%': {
            transform: 'translateY(-15px) scale(1.1) rotate(10deg)',
          },
          '100%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
          },
        },
      },
      animation: {
        'rotate-scale-wave-1': 'rotate-scale-wave-1 6s ease-in-out infinite',

        'rotate-scale-wave-2': 'rotate-scale-wave-2 8s ease-in-out infinite',

        'rotate-scale-wave-3': 'rotate-scale-wave-3 10s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}