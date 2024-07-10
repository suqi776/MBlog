import { defineConfigWithTheme ,DefaultTheme } from 'vitepress'
import { VitePressStylesPlugin } from './theme/style/loadStyles'

// https://vitepress.dev/reference/site-config
export interface ThemeConfig extends DefaultTheme.Config {
  docCount?: number,
}

export default defineConfigWithTheme<ThemeConfig>({
  title: "My Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    outlineTitle: '页面导航',

    docCount: 5,

    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2019-2024present Su_77', 
    },
  },
  // ...
  markdown: {
    lineNumbers: true,
  },
  vite: {
    optimizeDeps: {
      include: ['@vueuse/core']
    },
    plugins: [VitePressStylesPlugin()]
  }
})
