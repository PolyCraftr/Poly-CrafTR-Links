import plugin from '@tailwindcss/typography';
import user from './user.json';
import typography from '@tailwindcss/typography'
const theme = user.theme;



module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.ts' // Add your config file if you're using class strings here
  ],
  theme: {
    extend: {
      ...theme, // Spread colors, fontSize, spacing, etc. from JSON
      opacity: {
        3: '0.03', // Enables `bg-white/3`, `text-white/3`, etc.
        10: '0.1', // Enables `bg-white/10`, `text-white/10`, etc.
      },
      borderOpacity: {
        3: '0.03', // Enables `border-white/3`, etc.
        10: '0.1', // Enables `border-white/10`, etc.
      }
    }
  },
  plugins: [typography , 
     plugin(
      function ({ addVariant }) {
        addVariant("glow", ".glow-capture .glow-overlay &")
      },
      {
        theme: {
          extend: {
            colors: {
              // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
              glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
            },
          },
        },
      }
    ),
  ]
}