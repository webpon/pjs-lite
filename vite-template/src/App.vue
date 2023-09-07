<script setup>
import Note from './components/Note.vue'
</script>

<template>
  <div class="logo_wrapper">
      <img src="./assets/logo.png" class="logo" />
  </div>
  <Note msg="Express + Vue" />
</template>

<style scoped lang="less">
.logo_wrapper {
  text-align: center;
}
.logo {
  width: 14em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
