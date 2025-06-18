/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2F7',
          100: '#D1DBE8',
          200: '#A3B7D1',
          300: '#7593BA',
          400: '#476FA3',
          500: '#0F2C59', // primary navy
          600: '#0C2448',
          700: '#091C36',
          800: '#061424',
          900: '#030C12',
        },
        secondary: {
          50: '#FDF8F1',
          100: '#FAF0E2',
          200: '#F5E1C5',
          300: '#EFD2A8',
          400: '#EAC38B',
          500: '#E5B97F', // primary gold
          600: '#B09364',
          700: '#8C7650',
          800: '#675837',
          900: '#332C1B',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        'property': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'property-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};