// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'
import MyLayout from './Layout.vue'
import home from './page/home.vue'
import examples from './page/examples.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('index', home)
    app.component('examples', examples)
  }
} satisfies Theme
