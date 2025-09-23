/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2f5496',
          variant: '#ffbb5c',
          'variant-light': '#A2BCE0',
        },
        secondary: {
          DEFAULT: '#2c3e50',
          light: '#3498db',
        },
        background: {
          DEFAULT: '#0d0d0d',
          card: '#262626',
          sidebar: '#1a1a1a',
          content: '#1a1a1a',
          hover: '#333',
          lightDark: '#1e1e1e',
        },
        text: {
          DEFAULT: '#E1E5F2',
          light: '#fff',
          muted: '#888',
        },
        jet: '#383838',
        accent: {
          DEFAULT: '#ffbb5c',
          light: '#A2BCE0',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'text-gradient-yellow': 'linear-gradient(to right, hsl(45, 100%, 72%), #ffbb5c)',
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s infinite',
        'typing': 'typing 2s steps(40)',
        'blink-caret': 'blink-caret 0.5s step-end infinite',
        'fade-in': 'fadeIn 2s ease-in forwards',
        'zoom-out': 'zoomOut 0.5s forwards',
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#3498db' },
        },
        fadeIn: {
          from: { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        zoomOut: {
          from: {
            transform: 'scale(1)',
            opacity: '1',
          },
          to: {
            transform: 'scale(0.5)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
} 