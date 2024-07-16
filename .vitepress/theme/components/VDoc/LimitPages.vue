<script setup lang='ts'>
const props = defineProps<{
  totalPages: number
  currentPage: number
}>()

const emit = defineEmits<{
  (e: 'updatePage', page: number): void
}>()

function changePage(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit('updatePage', page)
  }
}
</script>

<template>
  <div class="limit-pages">
    <ul class="flex justify-center">
      <li class="limit-pages-list" :class="[{ disabled: currentPage === 1 }]" @click="changePage(currentPage - 1)">
        <span class="iconify carbon--triangle-left-solid text-center" />
      </li>
      <li v-for="(page, index) in totalPages" :key="index" :class="[{ active: currentPage === page }]" class="limit-pages-list" @click="changePage(page)">
        {{ page }}
      </li>
      <li class="limit-pages-list" :class="[{ disabled: currentPage === totalPages }]" @click="changePage(currentPage + 1)">
        <span class="iconify carbon--triangle-left-solid text-center rotate-180" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.limit-pages {
  margin: 32px 0 10px 0;
}

.limit-pages-list {
  margin: 4px 4px 10px;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 3px;
  font-size: 12px;
  border: 1px solid rgba(115, 115, 115, 0.5);
  width: 32px;
  height: 32px;
  color: rgba(115, 115, 115, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.limit-pages-list.active, .limit-pages-list:hover {
  color: var(--text-1-color);
  border: 1px solid rgba(115, 115, 115, 1);
}

.limit-pages-list.disabled {
  display: none;
}
</style>
