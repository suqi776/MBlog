<script setup lang='ts'>
import { computed, ref, watch } from 'vue'
import { useData } from 'vitepress'
import type { data as posts } from '../utils/posts.data'
import LimitPages from './VDoc/LimitPages.vue'

const props = defineProps<{
  currentPosts: typeof posts
  count?: number
}>()

const { theme } = useData()
const docCount: number = props.count ? props.count : theme.value.docCount
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.currentPosts.length / docCount))

const filteredPosts = computed(() => {
  const start = (currentPage.value - 1) * docCount
  const end = start + docCount
  return props.currentPosts.slice(start, end)
})

// 若为空返回第一页
watch(filteredPosts, (newFilteredPosts) => {
  if (newFilteredPosts.length === 0) {
    currentPage.value = 1
  }
})

function goToPage(page: number) {
  currentPage.value = page
}
</script>

<template>
  <div>
    <ul class="mt-5">
      <li v-for="{ title, url, date } of filteredPosts" :key="url" class="p-2 my-2 border-solid">
        <div>
          <a :href="url" class="w-full h-full flex flex-col">
            <span class="inline-block w-full h-full truncate">{{ title }}</span>
            <span class="date">- {{ date.string }}</span>
          </a>
        </div>
      </li>
    </ul>

    <LimitPages v-if="currentPosts.length > docCount" :total-pages="totalPages" :current-page="currentPage" @update-page="goToPage" />
  </div>
</template>

<style scoped>
li {
  border-color: rgba(125, 125, 125, 0.7);
  border-width: 1px;
  border-radius: 10px;
  color: rgba(125, 125, 125, 0.8);
}

li:hover {
  border-color: rgba(125, 125, 125);
  box-sizing: border-box;
  color: var(--text-1-color);
}

.date {
  color: rgba(125, 125, 125, 0.4);
}
</style>
