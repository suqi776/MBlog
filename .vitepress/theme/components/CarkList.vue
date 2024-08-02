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

function randomImages() {
  const imgNum = Math.floor(Math.random() * 5) + 1
  return `url(./.vitepress/theme/public/img_${imgNum}.jpg)`
}

function blogListImagesSize(item: { imgURL: string }) {
  let imagesSize: string = '150px'
  if (theme.value.blogList?.isBlogImages) {
    if (theme.value.blogList.imagesSize === 'small') {
      imagesSize = '100px'
    }
    else if (theme.value.blogList.imagesSize === 'large') {
      imagesSize = '200px'
    }
    return {
      backgroundImage: item.imgURL ? `url(${item.imgURL})` : randomImages(),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: imagesSize,
    }
  }
  return {
    height: imagesSize,
  }
}

function isLeftImagesShow(index: number) {
  if (((index % 2 === 0 && theme.value.blogList?.imagesLocation === 'reversal')
    || theme.value.blogList?.imagesLocation === 'left'
    || theme.value.blogList?.imagesLocation === 'leftRight'
    || !theme.value.blogList?.imagesLocation)
    && theme.value.blogList?.isBlogImages
  ) {
    return true
  }
}
function isRightImagesShow(index: number) {
  if (((index % 2 !== 0 && theme.value.blogList?.imagesLocation === 'reversal')
    || theme.value.blogList?.imagesLocation === 'right'
    || theme.value.blogList?.imagesLocation === 'leftRight')
    && theme.value.blogList?.isBlogImages
  ) {
    return true
  }
}
</script>

<template>
  <div>
    <div>
      <div
        v-for="(item, index) in filteredPosts"
        :key="index"
        class="box group mx-auto mb-5 box-border w-9/10 flex cursor-pointer items-center justify-center rounded"
      >
        <Cark class="cark w-full hover:bg-zinc-500/10">
          <template #default>
            <a :href="item.url" class="w-full flex justify-center">
              <div v-if="isLeftImagesShow(index)" class="box-images-right hidden w-3/10 overflow-hidden rounded-l md:block">
                <div
                  :style="blogListImagesSize(item)"
                  class="h-100px transition-transform duration-700 group-hover:scale-125"
                />
              </div>
              <div class="min-h-100px w-7/10 flex flex-col items-center justify-center">
                <div class="z-1">
                  <span v-if="item.top" class="top p-4 pt-0" />
                  <span class="w-full font-600">{{ item.title }}</span>
                </div>
                <div class="z-1 mt-3 flex text-xs">
                  <div class="flex items-center">
                    <div class="i-carbon-update-now mr-1 h-1em w-1em" />
                    <span class="w-full truncate">{{ item.date.string }}</span>
                  </div>
                  <div v-if="item.category" class="hidden flex-wrap md:flex">
                    <div
                      v-for="(category, categoryIndex) in item.category"
                      :key="categoryIndex"
                      class="mx-0.5"
                    >
                      <Cark class="m-0.1 px-1">
                        <template #default>
                          {{ category }}
                        </template>
                      </Cark>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="isRightImagesShow(index)" class="box-images hidden w-3/10 overflow-hidden rounded-r md:block">
                <div
                  :style="blogListImagesSize(item)"
                  class="transition-transform duration-700 group-hover:scale-125"
                />
              </div>
            </a>
          </template>
        </Cark>
      </div>
    </div>

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

.box {
  position: relative;
  box-shadow: var(--vp-shadow);
  transition: all 0.3s;
}
.box:hover {
  transition: 0.3s;
  box-shadow: var(--vp-shadow-hover);
}
.gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(125, 125, 125, 1), rgba(125, 125, 125, 0.5));
  border-radius: inherit;
}
.gradient:hover::before {
  background: linear-gradient(to right, rgba(125, 125, 125, 1), rgba(125, 125, 125, 0.9));
  transition: background 0.5s ease;
}
.box-images {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
}
.box-images-right {
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%) !important;
}
.box:hover .box-images {
  transition: 0.3s;
}
.top {
  clip-path: polygon(50% 100% , 100% 5% , 0 5%);
  border-radius: 50%;
  transform: rotate(45deg);
  width: 25px;
  height: 30px;
  background-color: rgba(125, 125, 125);
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
}
</style>
