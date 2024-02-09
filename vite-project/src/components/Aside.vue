<script setup>
import {getImageUrl} from '../library/functions';

</script>

<template>
   <aside class="w-4/100 min-h-screen bg-[#323338]">
      <div class="aside__top">
         <div class="pt-1.5 bg-[#38414a] shadow-custom">
            <img :src="getImageUrl('../assets/images/', 'user.png')" alt="" class="w-8 h-8 mx-auto mb-1.5">
            <p class="text-white text-base text-center">1</p>
         </div>
      </div>
   </aside>
</template>

<style scoped>

</style>