/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pine-green': '#14281D',
        'pine-surface': '#193325',
        'pine-card': '#1D382A',
        'warm-sand': '#F7F5F0',
        'sand-surface': '#FFFFFF',
        'sand-tint': '#ECE8DE',
        'bark-charcoal': '#1C2420',
        'charcoal-muted': '#525E57',
        'terracotta': '#E06D22',
        'terracotta-hover': '#C85B17',
        'moss-green': '#3E6B48',
        'moss-light': '#55875E',
        'pure-white': '#FFFFFF',
        'border-pine': 'rgba(247, 245, 240, 0.14)',
        'border-sand': 'rgba(28, 36, 32, 0.12)',
        'border-moss': 'rgba(62, 107, 72, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-terracotta': '0 0 24px -4px rgba(224, 109, 34, 0.35)',
        'glow-moss': '0 0 20px -3px rgba(62, 107, 72, 0.25)',
        'card-pine': '0 10px 30px -10px rgba(10, 20, 14, 0.6)',
        'card-sand': '0 10px 30px -10px rgba(28, 36, 32, 0.08)',
      }
    },
  },
  plugins: [],
}
