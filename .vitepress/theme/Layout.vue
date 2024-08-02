<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import ArtPlum from './components/ArtPlum.vue'
import DocFooter from './components/VDoc/DocFooter.vue'
import DocTop from './components/VDoc/DocTop.vue'
import BackToTop from './components/VDoc/BackToTop.vue'
import BgImages from './components/BgImages.vue'

const { frontmatter } = useData()
const { Layout } = DefaultTheme
</script>

<template>
  <div class="home">
    <ArtPlum />
    <BackToTop />
    <BgImages v-if="frontmatter.layout" />
    <Layout class="home-container">
      <template #doc-before>
        <DocTop />
      </template>
      <template #doc-after>
        <DocFooter />
      </template>
    </Layout>
  </div>
</template>

<style>

</style>
