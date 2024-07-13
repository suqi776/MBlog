<script setup>
import DefaultTheme from 'vitepress/theme'
import ArtPlum from './components/ArtPlum.vue'
import DocFooter from './components/VDoc/DocFooter.vue'
import DocLastUpdate from './components/VDoc/DocLastUpdate.vue'
import BackToTop from './components/VDoc/BackToTop.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <div class="home">
    <ArtPlum />
    <BackToTop />
    <Layout class="home-container">
      <template #doc-before>
        <DocLastUpdate />
      </template>
      <template #doc-after>
        <DocFooter />
      </template>
    </Layout>
  </div>
</template>

<style>

</style>
