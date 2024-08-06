<script setup lang='ts'>

</script>

<template>
  <div class="text-anime">
    我的博客 ｜ My Blog
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Reggae+One&display=swap');

.text-anime {
  animation: 5s linear 1s infinite alternate stroke;
  -webkit-text-stroke: 1px var(--su-c-text-1);
  font-family: "Reggae One", cursive;
  background-clip: text;
  line-height: initial;
}

@keyframes stroke {
  0% {
    color: rgba(138, 139, 141, 0);
  }
  25% {
    color: rgba(138, 139, 141, 0.25);
  }
  50% {
    color: rgba(138, 139, 141, 0.5);
  }
  75% {
    color: rgba(138, 139, 141, 0.75);
  }
  100% {
    color: rgba(138, 139, 141, 1);
  }
}
</style>
