import tailwindTypography from '@tailwindcss/typography'
import tailwindCssPluginPinegrow from '@pinegrow/tailwindcss-plugin'
import { getFontsWithFallback } from './src/utils/font'
import {
  pg_backgrounds,
  pg_colors,
  pg_fonts,
} from './themes/pg-tailwindcss/tokens.cjs'

export default {
  // important: true,
  darkMode: 'class',
  plugins: [
    tailwindTypography,
    // tailwindForms, // conflicts with vuetify, so turned it off
    tailwindCssPluginPinegrow({
      colors: pg_colors, // primary, secondary etc
      fonts: getFontsWithFallback(pg_fonts),
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
  ],

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  get content() {
    const _content = [
      './index.html',
      './src/**/*.{vue,svelte,astro,js,jsx,cjs,mjs,ts,tsx,cts,mts,html,md,mdx,json}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
