/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#ededf7',
          100: '#d0d0ec',
          200: '#a1a1d9',
          300: '#7272c6',
          400: '#4f4fb3',
          500: '#3d3d9e',
          600: '#2D2D7F',  // ← brand primary
          700: '#1e1e5c',
          800: '#141440',
          900: '#0a0a24',
        },
        gold: {
          50: '#fdf8ec',
          100: '#f8edce',
          200: '#f0d99d',
          300: '#e8c56c',
          400: '#dfc278',
          500: '#C9A84C',  // ← brand secondary
          600: '#a8883a',
          700: '#876829',
          800: '#664e1e',
          900: '#453413',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
