import type { DefaultTheme } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export interface ThemeConfig extends DefaultTheme.Config {
  docCount?: number
  blogImg?: boolean
  /**
   * @default isBlogImages:false
   * @default imagesSize:medium
   * @default imagesLocation:center
   * @description Set blog image style
   * @description imagesSize small : 小图｜medium : 中图｜large : 大图
   * @description imagesLocation left : 左｜right : 右｜reversal : 左右交替 | leftRight : 左右
   */
  blogList?: {
    isBlogImages?: boolean
    imagesSize?: 'small' | 'medium' | 'large'
    imagesLocation?: 'left' | 'right' | 'reversal' | 'leftRight'
  }
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh',
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

    blogList: {
      isBlogImages: true,
      imagesLocation: 'leftRight',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
  },
  // ...
  markdown: {
    lineNumbers: true,
  },
  vite: {
    optimizeDeps: {
      include: ['@vueuse/core'],
    },
    plugins: [UnoCSS()],
  },
  // vercel 移除 .html
  cleanUrls: true,
  // 显示最后更新时间
  lastUpdated: true,
})
