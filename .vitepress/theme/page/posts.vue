<script lang="ts" setup>
import { computed } from 'vue'
import CarkPosts from '../components/CarkPosts.vue'
import { data as posts } from '../utils/posts.data'

const currentPosts = computed(() => {
  return posts
})
</script>

<template>
  <CarkPosts :current-posts="currentPosts" class="cark-posts" :count="10" />
</template>

<style scoped>
.cark-posts {
  width: 90%;
  padding-top: 2%;
  margin: 0 auto;
  background-color: transparent;
}

@media (min-width: 1280px) {
  .cark-posts {
    width: 55%;
  }
}
</style>
