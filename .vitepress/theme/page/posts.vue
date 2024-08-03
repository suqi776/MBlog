<script lang="ts" setup>
import { computed } from 'vue'
import CarkPosts from '../components/CarkPosts.vue'
import { data as posts } from '../utils/posts.data'

const currentPosts = computed(() => {
  return posts
})
</script>

<template>
  <CarkPosts :current-posts="currentPosts" class="mx-auto w-8/10" :count="10" />
</template>

<style scoped>
</style>
