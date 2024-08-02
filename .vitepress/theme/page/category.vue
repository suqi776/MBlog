<script lang="ts" setup>
import { computed, ref } from 'vue'
import { data as posts } from '../utils/posts.data'
import Shields from '../components/VDoc/Shields.vue'
import CarkPosts from '../components/CarkPosts.vue'

const typeName = ref('')

const currentPosts = computed(() => {
  return typeName.value
    ? posts.filter(post => post.category.includes(typeName.value))
    : posts
})

// all category
const category = posts.map(p => p.category)

const uniqueCategory = Array.from(new Set(category.flat()))
uniqueCategory.unshift('全部')

function handleItemClick(c: any) {
  if (c === '全部')
    return typeName.value = ''
  typeName.value = c
}
</script>

<template>
  <div class="category m-auto">
    <Shields :category="uniqueCategory" @get-category="handleItemClick" />
    <CarkPosts :current-posts="currentPosts" :count="10" />
  </div>
</template>

<style scoped>
.category {
  width: 80%;
}
</style>
