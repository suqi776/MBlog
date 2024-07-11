import tailwind from 'tailwindcss'
import { addIconSelectors } from '@iconify/tailwind'

export default {
  plugins: [
    tailwind({
      content: [
        './.vitepress/theme/**/*.vue',
        './posts/**/*.md',
        './posts/*.md'
      ],
      plugins: [
        addIconSelectors(['mdi', 'mdi-light', 'carbon', 'simple-icons', 'logos'])
      ]
    }),
  ]
}