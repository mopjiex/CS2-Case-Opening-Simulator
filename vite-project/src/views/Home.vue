<script setup>
    import myHeader from '@/components/Header.vue'
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <myHeader/>
      <main class="main"></main>
    </div>
    <aside class="aside"></aside>
  </div>
</template>

<style scoped>
  .wrapper {
    min-height: 100vh;
    background-color: aqua;
    display: flex;
    justify-content: space-between;

  }

  .aside {
    width: 5vw;
    min-height: 100vh;
    background-color: #4B0082;
  }

  .main {
    background-color: #CD5C5C;
    min-height: 93vh;
  }
</style>
