<script setup lang='ts'>
import { useScroll } from '@vueuse/core'
import { useData } from 'vitepress'
import { ref, watch } from 'vue'

const { frontmatter, page } = useData()

const { y } = useScroll(window)
const isVisible = ref(false)

function scrollToTop() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}

watch(y, (newY) => {
  isVisible.value = newY > 200
})
</script>

<template>
  <div v-if="frontmatter.layout === 'index'" class="bg-img hidden w-full flex-col lg:flex">
    <img src="https://s2.loli.net/2023/11/03/kVCHqEAfg5jyGZX.jpg" class="lg:h-100vh">
    <div class="down i-carbon:touch-1-down pos-absolute left-1/2 h-2em w-2em cursor-pointer" @click="scrollToTop" />
  </div>
  <div v-else-if="frontmatter.layout" class="not-home-page hidden h-180px w-full items-center justify-center pt-[var(--vp-nav-height)] text-lg text-[var(--su-c-text-1)] font-800 backdrop-blur md:h-300px lg:flex md:text-10">
    <span>{{ page.title }}</span>
  </div>
</template>

<style scoped>
.bg-img::before {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--su-bg-color-alpha);
  content: '';
}
.down {
  color: var(--su-c-text-1);
  animation: moveUpAndDown 0.5s infinite alternate linear;
}

@keyframes moveUpAndDown {
  0% {
    bottom: 2rem;
  }
  100% {
    bottom: 1rem;
  }
}
</style>
