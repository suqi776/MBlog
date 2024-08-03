<script lang="ts" setup>
import { computed } from 'vue'
import CarkList from '../components/CarkList.vue'
import Info from '../components/Info.vue'
import { data as posts } from '../utils/posts.data'
import BgImages from '../components/BgImages.vue'

const currentPosts = computed(() => {
  return posts
})
</script>

<template>
  <BgImages class="block lg:hidden" />
  <div class="mx-40px my-0 mt-4 flex justify-evenly to-transparent">
    <CarkList class="w-full xl:w-4/5" :data-list="currentPosts" />
    <div class="ml-5 hidden w-1/5 xl:block">
      <div class="sticky top-5">
        <Info />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
