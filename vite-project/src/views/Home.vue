<script setup>
    import myHeader from '@/components/Header.vue';
    import myMain from '@/components/Main.vue';
    import myAside from '@/components/Aside.vue';

</script>

<template>
  <div class="wrapper">
    <div class="left">
      <myHeader/>
      <myMain/>
    </div>
    <myAside/>
  </div>
</template>

<style scoped>
  .wrapper {
    min-height: 100vh;
    background-color: aqua;
    display: flex;
    justify-content: space-between;

  }
 
 
</style>
