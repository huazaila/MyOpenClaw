/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 莫兰迪色系
        morandi: {
          beige: '#D4C5B9',
          sage: '#B5C4B1',
          dusty: '#9B8B7C',
          mauve: '#C4B5C0',
          slate: '#8A9A9A',
          rose: '#D4B5B0',
          cream: '#F5F1ED',
          charcoal: '#3D3D3D',
        },
        // 深色模式
        dark: {
          bg: '#0F0F0F',
          card: '#1A1A1A',
          surface: '#252525',
          border: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '24px',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
