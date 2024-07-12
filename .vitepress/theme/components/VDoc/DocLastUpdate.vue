<template>
  <div >
    <VPDocFooterLastUpdated style="display: none;" class="doc-footer-last-update"/>
    <span class="time">本文最后更新时间：{{ formattedDate }}</span>
  </div>
</template>

<script setup lang="ts">
import VPDocFooterLastUpdated from 'vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue'
import { useData } from 'vitepress'
import { onMounted, ref } from 'vue'

const { page } = useData()
const formattedDate = ref('')

onMounted(() => {
  const timestamp = page.value.lastUpdated;
  if (timestamp) {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    formattedDate.value = `${year}-${month}-${day}`
  }
})
</script>

<style scoped>
.time {
  font-size: 14px;
  color: rgba(125, 125, 125, .3);
}

.time:hover {
  color: rgba(125, 125, 125, .6);
}
</style>