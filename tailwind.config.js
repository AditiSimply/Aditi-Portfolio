/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F8F5EE',
          200: '#EFE9DC',
          300: '#E3DAC7',
          400: '#D1C4AC',
          500: '#B9A88C',
        },
        espresso: {
          950: '#18120F',
          900: '#231C18',
          800: '#342B24',
          700: '#483C33',
          600: '#5F5044',
          500: '#7B6A5C',
          400: '#9B897A',
          300: '#BDAF9F',
        },
        terracotta: {
          50: '#FBF5F2',
          100: '#F7ECE6',
          200: '#EFD4C7',
          300: '#E2B19A',
          400: '#D38A6A',
          500: '#C25E34',
          600: '#A94E27',
          700: '#8A3D1C',
        },
        clay: {
          500: '#8A5A36',
          600: '#714828',
        },
        amberwarm: {
          500: '#D97706',
          600: '#B45309',
        },
        sage: {
          50: '#F2F7F4',
          100: '#E2EDE5',
          500: '#4E7A5E',
          600: '#3D624A',
          700: '#2D4B37',
        },
        navy: {
          50: '#F0F4F9',
          100: '#E1E9F2',
          800: '#1E293B',
          900: '#0F172A',
          950: '#090E17',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['DM Serif Display', 'Newsreader', 'serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(45, 30, 20, 0.05), 0 1px 2px rgba(45, 30, 20, 0.04)',
        'soft': '0 4px 16px -2px rgba(45, 30, 20, 0.06), 0 2px 6px -1px rgba(45, 30, 20, 0.04)',
        'card': '0 10px 30px -4px rgba(45, 30, 20, 0.08), 0 4px 10px -2px rgba(45, 30, 20, 0.04)',
        'card-hover': '0 20px 40px -6px rgba(45, 30, 20, 0.12), 0 8px 16px -4px rgba(45, 30, 20, 0.06)',
        'terracotta': '0 8px 24px -4px rgba(194, 94, 52, 0.28)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
