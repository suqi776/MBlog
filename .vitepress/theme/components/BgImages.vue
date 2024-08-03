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
  <div>
    <div class="flex flex-col">
      <div v-if="frontmatter.layout === 'index'" class="bg-img w-full flex flex-col">
        <div class="h-50vh flex items-center justify-center lg:h-100vh" style="background: url('https://s2.loli.net/2023/11/03/kVCHqEAfg5jyGZX.jpg') center center / cover no-repeat;">
          <div class="z-1 text-lg font-800 md:text-10">
            <span>My Blog</span>
          </div>
          <div class="down i-carbon:touch-1-down pos-absolute hidden h-2em w-2em cursor-pointer lg:block" @click="scrollToTop" />
        </div>
      </div>
    </div>
    <div v-if="frontmatter.layout && frontmatter.layout !== 'index'" class="not-home-page hidden h-180px w-full items-center justify-center pt-[var(--vp-nav-height)] text-lg text-[var(--su-c-text-1)] font-800 backdrop-blur md:h-300px lg:flex md:text-10">
      <span>{{ page.title }}</span>
    </div>
  </div>
</template>

<style scoped>
.bg-img::before {
  position: absolute;
  width: 100%;
  height: 50vh;
  background-color: var(--su-bg-color-alpha);
  content: '';
}

@media (min-width: 1024px) {
  .bg-img::before {
    height: 100%;
  }
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
