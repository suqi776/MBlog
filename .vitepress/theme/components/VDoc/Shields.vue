<script setup lang='ts'>
defineProps({
  category: Array<string>,
})

const emit = defineEmits(['getCategory'])

function getCategory(c: any) {
  emit('getCategory', c)
}

function badgeUrl(category: string | number | boolean) {
  return `https://img.shields.io/badge/-${encodeURIComponent(category)}-${encodeURIComponent('#3c3c43c7')}?logo=${encodeURIComponent(category)}`
}
</script>

<template>
  <div class="flex flex-wrap bottom-2">
    <img v-for="(c, index) in category" :key="index" :alt="c" :src="badgeUrl(c)" class="m-1 ml-0 cursor-pointer" @click="getCategory(c)">
  </div>
</template>

<style scoped>

</style>
