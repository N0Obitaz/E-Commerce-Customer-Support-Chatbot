import type { Config } from 'tailwindcss'

/**
 * Design tokens extracted from the Stitch project
 * "Custom Wireframe Design Template" (Neo-Brutalist High-Contrast System).
 *
 * Colors   -> Material-3-ish surface ramp + pop accents (yellow / cyan / pink / mint)
 * Fonts    -> Space Grotesk (display, labels) + Work Sans (body)
 * Spacing  -> named token scale: space-xs … space-2xl, gutter, margin
 * Depth    -> hard offset shadows only (no blur), 2–3.5px ink borders
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // page canvases
        canvas: { DEFAULT: '#fcf9f8', wire: '#f6f3eb', chat: '#faf8f7' },
        // structural ink (borders, shadows, high-emphasis text)
        ink: { DEFAULT: '#1c1b1b', strong: '#0a0a0a', inverse: '#f3f0ef' },
        // neutral surface ramp
        surface: {
          DEFAULT: '#fcf9f8',
          dim: '#dcd9d9',
          'container-lowest': '#ffffff',
          'container-low': '#f6f3f2',
          container: '#f0edec',
          'container-high': '#ebe7e7',
          'container-highest': '#e5e2e1',
        },
        'on-surface': { DEFAULT: '#1c1b1b', variant: '#4f4633' },
        outline: { DEFAULT: '#817661', variant: '#d3c5ac' },
        // accents
        primary: {
          DEFAULT: '#795900',
          container: '#fbbf24',
          fixed: '#ffdf9f',
          'fixed-dim': '#f9bd22',
          on: '#ffffff',
          'on-container': '#6c4f00',
        },
        secondary: { DEFAULT: '#00668a', container: '#38bdf8', soft: '#40c2fd', fixed: '#c4e7ff' },
        tertiary: { DEFAULT: '#a43073', container: '#f472b6', soft: '#ffb2d5', fixed: '#ffd8e7' },
        success: { DEFAULT: '#4ade80', strong: '#16a34a' },
        danger: '#ef4444',
        // wireframe template pop palette
        pop: { yellow: '#facc15', pink: '#ff77bc', blue: '#22d3ee', green: '#4ade80', purple: '#c084fc' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['64px', { lineHeight: '72px', fontWeight: '700', letterSpacing: '-0.03em' }],
        'display-hero-mobile': ['40px', { lineHeight: '48px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'headline-lg': ['36px', { lineHeight: '44px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600', letterSpacing: '-0.01em' }],
        'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', fontWeight: '600', letterSpacing: '0.02em' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '700', letterSpacing: '0.04em' }],
      },
      spacing: {
        'gutter-sm': '1rem',
        gutter: '1.5rem',
        'margin-sm': '1rem',
        margin: '2rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'space-2xl': '3rem',
      },
      borderWidth: {
        brutal: '2.5px',
        'brutal-strong': '3px',
        'brutal-pop': '3.5px',
        hairline: '1.5px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
      },
      boxShadow: {
        'brutal-xs': '2px 2px 0px #1c1b1b',
        'brutal-sm': '3px 3px 0px #1c1b1b',
        'brutal-md': '4px 4px 0px #1c1b1b',
        brutal: '5px 5px 0px #1c1b1b',
        'brutal-lg': '6px 6px 0px #1c1b1b',
        'brutal-xl': '8px 8px 0px #1c1b1b',
        'brutal-2xl': '12px 12px 0px #1c1b1b',
        'brutal-press': '1px 1px 0px #1c1b1b',
      },
    },
  },
  plugins: [],
}

export default config
