<script lang="ts" setup>
import { computed, ref } from 'vue'
import { data as posts } from '../utils/posts.data'
import Shields from '../components/VDoc/Shields.vue'

const typeName = ref('')

const currentPosts = computed(() => {
  return typeName.value ? posts.filter(post => post.category.includes(typeName.value)) : posts
})

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
    <ul class="mt-5">
      <li v-for="{ title, url, date } of currentPosts" :key="url" class="p-2 my-2 border-solid">
        <div>
          <a :href="url" class="w-full h-full flex flex-col">
            <span class="inline-block w-full h-full text-ellipsis whitespace-nowrap overflow-hidden">{{ title }}</span>
            <span class="date">- {{ date.string }}</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.category {
  width: 90%;
}

@media (min-width: 768px) {
  .category {
    width: 60%;
  }
}

li {
  border-color: rgba(125, 125, 125, 0.7);
  border-width: 1px;
  border-radius: 10px;
  color: rgba(125, 125, 125, 0.8);
}

li:hover {
  border-color: rgba(125, 125, 125);
  box-shadow: 0 1px 6px 0 rgba(127,127,127, .6);
  box-sizing: border-box;
  color: var(--text-1-color);

}

.date {
  color: rgba(125, 125, 125, 0.4);
}
</style>
