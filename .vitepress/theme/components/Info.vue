<script setup lang='ts'>
import { computed } from 'vue'
import { data as posts } from '../utils/posts.data'
import Cark from './Cark.vue'

const blogNum = computed(() => {
  return posts.length
})
</script>

<template>
  <Cark>
    <template #default>
      <div class="info">
        <img class="spin m-5 mx-auto h-24 w-24 rounded-full bg-zinc-500/10 p-4" src="../public/logo.svg" alt="" width="433" height="577">
      </div>
      <div class="flex justify-center">
        <a class="cursor-pointer">
          <span class="iconify carbon--logo-github" style="width: 1.4rem; height: 1.4rem;" />
        </a>
        <a class="cursor-pointer">
          <span class="iconify carbon--email ml-5" style="width: 1.4rem; height: 1.4rem;" />
        </a>
      </div>
      <div class="mx-8 my-6 flex justify-between">
        <div class="w-1/3 flex flex-col items-center">
          <span>文章</span>
          <span>{{ blogNum }}</span>
        </div>
        <div class="w-1/3 flex flex-col items-center">
          <span>标签</span>
          <span>{{ blogNum }}</span>
        </div>
        <div class="w-1/3 flex flex-col items-center">
          <span>分类</span>
          <span>{{ blogNum }}</span>
        </div>
        <!-- <div class="flex flex-col items-center w-1/2">
          <span>访问数</span>
          <span id="busuanzi_value_site_pv" />
        </div> -->
        <div />
      </div>
    </template>
  </Cark>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spin:hover {
  animation: spin 2s linear infinite;
}
</style>
