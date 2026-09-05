import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f5f5f5',
        muted: '#a1a1aa',
        border: 'rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59,130,246,0.22), rgba(124,58,237,0.08) 40%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 12px 50px rgba(37, 99, 235, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
