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
        <div class="h-40vh flex items-center justify-center lg:h-100vh" style="background: url('https://s2.loli.net/2023/11/03/kVCHqEAfg5jyGZX.jpg') center center / cover no-repeat;">
          <div class="z-1 text-lg text-[var(--su-c-text-1)] font-800 md:text-10">
            <span>My Blog</span>
          </div>
          <div class="down i-carbon:touch-1-down pos-absolute z-10 hidden h-2em w-2em cursor-pointer lg:block" @click="scrollToTop" />
        </div>
        <svg class="banner" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" />
            <use xlink:href="#gentle-wave" x="48" y="3" />
            <use xlink:href="#gentle-wave" x="48" y="5" />
            <use xlink:href="#gentle-wave" x="48" y="7" />
          </g>
        </svg>
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
  height: 40vh;
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
    bottom: 9rem;
  }
  100% {
    bottom: 8rem;
  }
}

.banner {
  width: 100%;
  height: 7rem;
  position: absolute;
  left: 0;
  fill: var(--vp-c-bg);
  margin-bottom: 64px;
  bottom: 40vh;
}

@media (min-width: 1024px) {
  .banner {
    margin-bottom: 0;
    bottom: 0;
  }
}

.banner .parallax>use {
  -webkit-animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite
}

.banner .parallax>use:first-child {
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
  -webkit-animation-duration: 7s;
  animation-duration: 7s;
  opacity: .9
}

.banner .parallax>use:nth-child(2) {
  -webkit-animation-delay: -3s;
  animation-delay: -3s;
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  opacity: .8
}

.banner .parallax>use:nth-child(3) {
  -webkit-animation-delay: -4s;
  animation-delay: -4s;
  -webkit-animation-duration: 13s;
  animation-duration: 13s;
  opacity: .9
}

.banner .parallax>use:nth-child(4) {
  -webkit-animation-delay: -5s;
  animation-delay: -5s;
  -webkit-animation-duration: 20s;
  animation-duration: 20s
}

@keyframes move-forever {
  0% {
      -webkit-transform: translate3d(-90px,0,0);
      transform: translate3d(-90px,0,0)
  }

  to {
      -webkit-transform: translate3d(85px,0,0);
      transform: translate3d(85px,0,0)
  }
}
</style>
