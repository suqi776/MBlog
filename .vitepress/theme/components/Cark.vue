<script setup lang='ts'>

</script>

<template>
  <div class="cark border-solid border-zinc-500/50 hover:bg-zinc-500/10 border rounded-xl w-full h-full">
    <slot />
  </div>
</template>

<style scoped>
.cark {
  box-shadow: 7px 7px 0px 0px rgb(113 113 122 / 0.5);
  transition: all 0.3s ease;
  cursor: pointer;
  transform: translateY(3px);
}
</style>
