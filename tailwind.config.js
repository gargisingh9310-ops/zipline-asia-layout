/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Final Brand Colour Palette
        'forest-green': '#183B2B',
        'forest-surface': '#1F4735',
        'forest-dark': '#122D21',
        'charcoal': '#292D2B',
        'charcoal-surface': '#232625',
        'charcoal-muted': '#6E7571',
        'gold': '#C6A15B',
        'gold-hover': '#B08B46',
        'pure-white': '#FFFFFF',

        // Coordinated mappings ensuring 100% theme consistency
        'pine-green': '#183B2B',
        'pine-surface': '#1F4735',
        'pine-card': '#234E3A',
        'warm-sand': '#F7F5F0',
        'sand-surface': '#FFFFFF',
        'sand-tint': '#ECE8DE',
        'bark-charcoal': '#292D2B',
        'terracotta': '#C6A15B',
        'terracotta-hover': '#B08B46',
        'moss-green': '#183B2B',
        'moss-light': '#2E5F47',
        'border-pine': 'rgba(255, 255, 255, 0.12)',
        'border-sand': 'rgba(41, 45, 43, 0.12)',
        'border-moss': 'rgba(198, 161, 91, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-terracotta': '0 0 24px -4px rgba(198, 161, 91, 0.45)',
        'glow-gold': '0 0 24px -4px rgba(198, 161, 91, 0.45)',
        'glow-moss': '0 0 20px -3px rgba(24, 59, 43, 0.25)',
        'card-pine': '0 10px 30px -10px rgba(41, 45, 43, 0.6)',
        'card-sand': '0 10px 30px -10px rgba(41, 45, 43, 0.08)',
      }
    },
  },
  plugins: [],
}
