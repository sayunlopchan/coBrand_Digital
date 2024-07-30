/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 4px 6px rgba(0, 0, 0, 0.1)' // Customize this value as needed
      },
      keyframes: {
        'scale-wave': {
          '0%': { transform: 'scale(1) translateY(0)' },
          '25%': { transform: 'scale(1.2) translateY(-10px)' },
          '50%': { transform: 'scale(1) translateY(0)' },
          '75%': { transform: 'scale(0.8) translateY(10px)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        'scale-wave-high-low': {
          '0%': {
            transform: 'translateY(0) scale(1)',
          },
          '25%': {
            transform: 'translateY(-20px) scale(1.2)',
          },
          '50%': {
            transform: 'translateY(10px) scale(0.8)',
          },
          '75%': {
            transform: 'translateY(-15px) scale(1.1)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
          },
        },
        'rotate-scale-wave': {
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
        'scale-wave-slow': 'scale-wave 10s ease-in-out infinite',
        'scale-wave-high-low': 'scale-wave-high-low 4s ease-in-out infinite',
        'rotate-scale-wave': 'rotate-scale-wave 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}