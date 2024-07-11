<template>
  <ul class="home-list">
    <li v-for="{ title, url, date, excerpt } of currentPosts">
      <div class="linkcard">
        <a :href="url">
          <p class="description">
            {{ title }}
            <br>
            <span>{{ date.string }}</span>
          </p>
          <div class="logo">
              <img alt="Logo" width="70px" height="70px" src="https://vitepress.yiov.top/logo.png" />
          </div>
        </a>
      </div>
    </li>
  </ul>

  <div class="home-wrapper">
    <div :class="['home-item', { disabled: currentPage === 1 }]" @click="prevPage()">Prev</div>
    <div v-for="page in totalPages" :key="page" :class="['home-item', { active: currentPage === page }]" @click="goToPage(page)">
      {{ page }}
    </div>
    <div :class="['home-item', { disabled: currentPage === totalPages }]" @click="nextPage()">Next</div>
  </div>
</template>


<script lang="ts" setup>
import { computed, ref } from 'vue';
import { data as posts } from '../utils/posts.data'
import { useData } from 'vitepress'

const { theme } = useData()
const docCount: number = theme.value.docCount || 5
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(posts.length / docCount))
const currentPosts = computed(() => {
  const start = (currentPage.value - 1) * docCount
  const end = start + docCount
  return posts.slice(start, end)
})

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function goToPage(page: number) {
  currentPage.value = page
  console.log(currentPage.value)
}

</script>
 
<style scoped>
.home-list{
  padding-top: 10%;
  width: 60%;
  margin: 0 auto;
  background-color: transparent;
}
.home-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.home-item {
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  font-weight: bolder;
  display: inline-block;
  cursor: pointer;
  border-radius: 2px;
  line-height: 13px;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(108, 108, 108, 0.5);
  transition: all 0.5s;
}
.home-item.disabled {
  cursor: not-allowed;
}
.home-item.active {
  background-color: #007bff;
  color: white;
}
</style>