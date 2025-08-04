/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#A855F7',
          500: '#A855F7',
        },
        purple: {
          500: '#A855F7',
        },
        dark: {
          bg: '#0D0D0D',
        },
        neutral: {
          400: '#a3a3a3',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'container-sm': '1rem',      // 16px - Mobile
        'container-md': '1.5rem',    // 24px - Small tablet
        'container-lg': '2rem',      // 32px - Tablet
        'container-xl': '3rem',      // 48px - Desktop
        'container-2xl': '4rem',     // 64px - Large desktop
        'container-3xl': '5rem',     // 80px - Extra large
      },
      maxWidth: {
        'container': '1400px',       // Max container width
      },
      animation: {
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
