<script lang="ts" setup>
import { computed } from 'vue'
import CarkList from '../components/CarkList.vue'
import { data as posts } from '../utils/posts.data'

const currentPosts = computed(() => {
  return posts
})
</script>

<template>
  <CarkList class="cark-posts" :data-list="currentPosts" />
</template>

<style scoped>
.cark-posts {
  width: 90%;
  margin: 0 auto;
  /* margin: 100vh auto 0 auto; */
  background-color: transparent;
}

@media (min-width: 1280px) {
  .cark-posts {
    width: 55%;
  }
}
</style>
