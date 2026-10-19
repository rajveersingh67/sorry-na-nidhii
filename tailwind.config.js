/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          blush: '#FFE5EC',
          softPink: '#FFB3C6',
          rose: '#FB6F92',
          deepRose: '#E01E5A',
          ruby: '#9E0031',
          lavender: '#E8DFF5',
          paleLavender: '#F3EEFB',
          cream: '#FFFDF9',
          warmWhite: '#FCF9F7',
          softGold: '#F4D06F',
        }
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', '"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'romantic': '0 10px 30px -5px rgba(251, 111, 146, 0.3)',
        'romantic-lg': '0 20px 45px -10px rgba(224, 30, 90, 0.35)',
        'romantic-glow': '0 0 25px rgba(251, 111, 146, 0.6)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};
