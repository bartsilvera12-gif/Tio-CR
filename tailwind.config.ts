import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#FFFFFF',
          cyanDark: '#0A1F3D',
          ink: '#202020',
          soft: '#F6F6F6',
          navy: '#061428',
          navyDeep: '#030A1A',
          navyLight: '#0E2247',
        },
      },
      fontFamily: {
        display: ['var(--font-made-tommy)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: { '2xl': '1240px' },
      },
    },
  },
  plugins: [],
}

export default config
