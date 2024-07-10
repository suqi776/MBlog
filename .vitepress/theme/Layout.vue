<template>
   <div class="home"> 
    <ArtPlum/>
    <Layout class="home-container">
    </Layout>
  </div>  
</template>

<script setup>
import { onMounted ,onUnmounted ,ref } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ArtPlum from './components/ArtPlum.vue'

const { Layout } = DefaultTheme

const isAtTop = ref(true)
const dividerLine = ref(null)
const divider = ref(null)

function handleScroll() {
  isAtTop.value = window.scrollY === 0
  if (isAtTop.value && (dividerLine.value || divider.value) ) {
    divider.value.classList.remove('fade-out')
    dividerLine.value.classList.remove('fade-out')
    setTimeout(() => {
      divider.value.classList.add('fade-out')
      dividerLine.value.classList.add('fade-out')
    }, 3000)
  }
}

onMounted(() => {
  dividerLine.value = document.querySelector('.divider-line')
  divider.value = document.querySelector('.divider')
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.divider-line.fade-out,
.divider.fade-out {
  background-color: transparent !important;
}

</style>
