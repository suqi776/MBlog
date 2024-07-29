import type { DefaultTheme } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export interface ThemeConfig extends DefaultTheme.Config {
  docCount?: number
  blogImg?: boolean
}

export default defineConfigWithTheme<ThemeConfig>({
  title: 'My Blog',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '归档', link: '/pages/posts' },
      { text: '分类', link: '/pages/category' },
    ],

    // 分页
    docCount: 5,

    // 尾部
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Su-77',
    },

    // 目录侧边栏
    aside: false,

    // 是否显示图片
    blogImg: true,
  },
  // ...
  markdown: {
    lineNumbers: true,
  },
  vite: {
    optimizeDeps: {
      include: ['@vueuse/core'],
    },
  },
  // vercel 移除 .html
  cleanUrls: true,
  // 显示最后更新时间
  lastUpdated: true,
})
