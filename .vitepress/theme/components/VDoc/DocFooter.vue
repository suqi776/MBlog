<template>
  <footer>
    <div class="link">
      <div v-if="prevPost">
        <a :href="prevPost.url">> {{ prevPost.title }}</a>
      </div>
      <div v-if="nextPost">
        <a :href="nextPost.url">> {{ nextPost.title }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { data as posts } from '../../utils/posts.data'

const route = useRoute()

function findCurrentIndex() {
  return posts.findIndex((p) => p.url.replace(/.html/g, '') === route.path)
}

const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<style scoped>
.link a:hover {
  border-bottom: 1px solid rgba(125, 125, 125, .3);
  transition: border .3s ease-in-out;
}

.link div {
  padding-bottom: 15px;
}
</style>