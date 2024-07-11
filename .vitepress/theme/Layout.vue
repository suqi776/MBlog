<template>
   <div class="home"> 
    <ArtPlum/>
    <Layout class="home-container">
      <template #doc-after>
        <DocFooter/>
      </template>
    </Layout>
  </div>  
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import ArtPlum from './components/ArtPlum.vue'
import DocFooter from './components/VDoc/DocFooter.vue';

const { Layout } = DefaultTheme

</script>

<style>

</style>
