<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { data as posts } from '../utils/posts.data'
import LimitPages from './VDoc/LimitPages.vue'

const { theme } = useData()
const docCount: number = theme.value.docCount || 5
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(posts.length / docCount))
const currentPosts = computed(() => {
  const start = (currentPage.value - 1) * docCount
  const end = start + docCount
  return posts.slice(start, end)
})

function goToPage(page: number) {
  currentPage.value = page
}
</script>

<template>
  <ul class="home-list">
    <li v-for="{ title, url, date } of currentPosts" :key="url">
      <div class="linkcard">
        <a :href="url">
          <p class="description">
            {{ title }}
            <br>
            <span>{{ date.string }}</span>
          </p>
          <div class="logo">
            <img alt="Logo" width="70px" height="70px" src="https://vitepress.yiov.top/logo.png">
          </div>
        </a>
      </div>
    </li>
  </ul>

  <LimitPages :total-pages="totalPages" :current-page="currentPage" @update-page="goToPage" />
</template>

<style scoped>
.home-list{
  padding-top: 10%;
  width: 60%;
  margin: 0 auto;
  background-color: transparent;
}
</style>
