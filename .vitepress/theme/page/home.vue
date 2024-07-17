<script lang="ts" setup>
import { computed } from 'vue'
import CarkList from '../components/CarkList.vue'
import Cark from '../components/Cark.vue'
import { data as posts } from '../utils/posts.data'

const currentPosts = computed(() => {
  return posts
})
</script>

<template>
  <div class="home mt-4 flex">
    <CarkList class="cark-list w-3/5 mr-5" :data-list="currentPosts" />
    <Cark class="cark w-2/5 h-20" />
  </div>
</template>

<style scoped>
.home {
  width: 90%;
  margin: 0 auto;
  /* margin: 100vh auto 0 auto; */
  background-color: transparent;
}

.cark-list {
  width: 100%;
}

.home > .cark{
  display: none;
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
