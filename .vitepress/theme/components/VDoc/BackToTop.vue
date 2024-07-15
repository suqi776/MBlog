<script setup lang='ts'>
import { useScroll } from '@vueuse/core'
import { ref, watch } from 'vue'

const { y } = useScroll(window)
const isVisible = ref(false)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

watch(y, (newY) => {
  isVisible.value = newY > 200
})
</script>

<template>
  <div v-if="isVisible" class="back-top iconify carbon--arrow-shift-down" @click="scrollToTop" />
</template>

<style scoped>
.back-top {
  width: 20px;
  height: 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 777;
  transform: rotate(180deg);
  color: rgba(125, 125, 125, 0.7);
}
</style>
