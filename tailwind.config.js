/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1210', // deep forest-black background
          soft: '#10231C', // surface
          raised: '#16291F', // card surface
          line: 'rgba(244,241,230,0.09)', // hairline borders
        },
        parchment: {
          DEFAULT: '#F4F1E6', // primary text
          muted: '#A8B3A9', // secondary text
        },
        brass: {
          DEFAULT: '#C9A15A',
          dim: '#8C7541',
          bright: '#E4C07E',
        },
        sage: {
          DEFAULT: '#6E9A82',
          deep: '#3F5F4E',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(60% 60% at 50% 0%, rgba(201,161,90,0.10) 0%, rgba(11,18,16,0) 70%)',
        'grain-line': 'linear-gradient(180deg, rgba(244,241,230,0.06), transparent)',
      },
      boxShadow: {
        seal: '0 0 0 1px rgba(201,161,90,0.35), 0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      animation: {
        'spin-slow': 'spin 26s linear infinite',
      },
    },
  },
  plugins: [],
}
