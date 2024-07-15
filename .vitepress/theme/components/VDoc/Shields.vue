<script setup lang='ts'>
defineProps({
  category: Array<string>,
})

function badgeUrl(category: string | number | boolean) {
  return `https://img.shields.io/badge/-${encodeURIComponent(category)}-%237d7d7d4d?logo=${encodeURIComponent(category)}`
}
</script>

<template>
  <div class="flex flex-wrap bottom-2">
    <img v-for="(c, index) in category" :key="index" :alt="c" :src="badgeUrl(c)" class="m-1 ml-0">
  </div>
</template>

<style scoped>

</style>
