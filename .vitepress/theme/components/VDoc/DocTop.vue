<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { onMounted, ref, watch } from 'vue'
import Shields from './Shields.vue'

const { page, frontmatter } = useData()
const route = useRoute()
const formattedDate = ref('')
const category = ref([])

watch(route, () => {
  getCategory()
  getFormattedDate()
})

onMounted(() => {
  getCategory()
  getFormattedDate()
})

function getFormattedDate() {
  const timestamp = page.value.lastUpdated
  if (timestamp) {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    formattedDate.value = `${year}-${month}-${day}`
  }
}

function getCategory() {
  category.value = frontmatter.value.category
}
</script>

<template>
  <div>
    <h1 class="title">
      {{ page.title }}
    </h1>
    <span class="time">本文最后更新时间：{{ formattedDate }}</span>
    <Shields :category="category" />
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

.title {
  letter-spacing: -0.02em;
  line-height: 40px;
  font-size: 28px;
  font-weight: 800;
}

@media (min-width: 768px) {
  .title {
      letter-spacing: -0.02em;
      line-height: 40px;
      font-size: 2.27rem;
      font-weight: 800;
  }
}
</style>
