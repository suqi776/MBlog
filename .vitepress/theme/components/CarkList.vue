<script setup lang='ts'>
import { computed, ref, watch } from 'vue'
import { useData } from 'vitepress'
import type { data as posts } from '../utils/posts.data'
import LimitPages from './VDoc/LimitPages.vue'
import Cark from './Cark.vue'

const props = defineProps<{
  dataList: [] | typeof posts
  count?: number
}>()

const { theme } = useData()
const docCount: number = props.count ? props.count : theme.value.docCount
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.dataList.length / docCount))

const filteredPosts = computed(() => {
  const start = (currentPage.value - 1) * docCount
  const end = start + docCount
  return props.dataList.slice(start, end)
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
    <ul class="w-full h-full flex flex-col">
      <li
        v-for="(item, index) in filteredPosts"
        :key="index"
        class="h-44 mt-4 cursor-pointer"
      >
        <Cark class="p-10">
          <template #default>
            <a :href="item.url" class="flex flex-col justify-center w-full">
              <h2 class="text-lg font-bold">
                {{ item.title }}
              </h2>
              <span class="inline-block truncate w-full leading-none my-3">
                x app.Click the button to watch on Jetflix app.Click the button to watch on  Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app. Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app. Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app. Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app. Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app. Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app. Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Jetflix app.Click the button to watch on Jetflix app.
              </span>
              <span>
                ---  {{ item.date.string }}
              </span>
            </a>
          </template>
        </Cark>
      </li>
    </ul>
    <LimitPages v-if="dataList.length > docCount" :total-pages="totalPages" :current-page="currentPage" @update-page="goToPage" />
  </div>
</template>

<style scoped>

</style>
