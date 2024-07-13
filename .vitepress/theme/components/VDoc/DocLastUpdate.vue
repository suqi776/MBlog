<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, ref } from 'vue'

const { page } = useData()
const formattedDate = ref('')

onMounted(() => {
  const timestamp = page.value.lastUpdated
  if (timestamp) {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    formattedDate.value = `${year}-${month}-${day}`
  }
})
</script>

<template>
  <div>
    <span class="time">本文最后更新时间：{{ formattedDate }}</span>
  </div>
</template>

<style scoped>
.time {
  font-size: 14px;
  color: rgba(125, 125, 125, .3);
}

.time:hover {
  color: rgba(125, 125, 125, .6);
}
</style>
