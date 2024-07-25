<script lang="ts" setup>
import { computed } from 'vue'
import CarkList from '../components/CarkList.vue'
import Info from '../components/Info.vue'
import { data as posts } from '../utils/posts.data'

const currentPosts = computed(() => {
  return posts
})
</script>

<template>
</template>

<style scoped>
.home {
  width: 90%;
  margin: 0 auto;
  background-color: transparent;
}

.home > .cark{
  display: none;
}

.cark-list {
  width: 100%;
}

@media (min-width: 1280px) {
  .home {
    width: 55%;
  }
}

@media (min-width: 768px) {
  .home > .cark{
    display: block;
  }
  .cark-list {
    width: 60%;
  }
}
</style>
