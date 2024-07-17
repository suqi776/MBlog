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
    <ul class="w-full">
      <li
        v-for="(item, index) in filteredPosts"
        :key="index"
        class="h-44 cursor-pointer mb-5"
      >
        <Cark class="cark p-10 hover:bg-zinc-500/10">
          <template #default>
            <a :href="item.url" class="flex flex-col w-full">
              <h2 class="text-lg font-bold truncate w-full">
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
.cark {
  box-shadow: 7px 7px 0px 0px rgb(113 113 122 / 0.5);
  cursor: pointer;
}

@media (min-width: 768px) {
  .cark {
    box-shadow: none;
  }

  .cark:hover {
    box-shadow: 0px 0px 20px 0px rgb(113 113 122 / 0.5);
    transition: all 0.3s ease;
  }
}
</style>
