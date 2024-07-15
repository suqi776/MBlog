import { addIconSelectors } from '@iconify/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.vitepress/theme/**/*.vue',
    './posts/**/*.md',
    './posts/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [addIconSelectors(['mdi', 'mdi-light', 'carbon', 'simple-icons', 'logos'])],
}

