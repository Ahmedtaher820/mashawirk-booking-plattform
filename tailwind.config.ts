import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101C2C',
          soft: '#1C3448'
        },
        gold: {
          DEFAULT: '#C5A46D',
          soft: '#D4B984'
        },
        ivory: {
          DEFAULT: '#F5F3EF',
          soft: '#FAF8F5'
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'Segoe UI', 'Tahoma', 'sans-serif']
      },
      fontWeight: {
        // Keep Tailwind names but softer numeric weights for Arabic comfort
        medium: '500',
        semibold: '500',
        bold: '600',
        extrabold: '600'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16, 28, 44, 0.08)'
      }
    }
  },
  plugins: []
} satisfies Config
