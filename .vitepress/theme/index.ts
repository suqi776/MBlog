// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'
import 'busuanzi.pure.js'
import MyLayout from './Layout.vue'
import home from './page/home.vue'
import examples from './page/examples.vue'
import category from './page/category.vue'
import posts from './page/posts.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    // ...
    app.component('index', home)
    app.component('examples', examples)
    app.component('category', category)
    app.component('posts', posts)
  },
} satisfies Theme
