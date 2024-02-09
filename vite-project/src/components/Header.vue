<script setup>
import {getImageUrl} from '../library/functions';
const images = ['home.png', 'tv.png', 'settings.png', 'off.png']
const menuItems = ['Инвентарь', 'Снаряжение', 'Играть', 'Магазин', 'Новости'];

</script>

<template>
  <header class="pt-2.5 w-96/100 h-7/100 bg-[#38414a] font-roboto">
    <div class="mx-auto px-2.5 max-w-[1520px]">
      <div class="flex item-center justify-between">
        <div class="flex items-center gap-x-12">
          <div class="p-1 cursor-pointer transition-all duration-300 hover:bg-gray-400 hover:rounded-md" 
              v-for="image in images">
            <img :src="getImageUrl('../assets/images/', image)" class="w-5 h-5">
          </div>
        </div>

        <ul class="flex items-center gap-x-14 mr-15vw">
          <li class="text-white uppercase text-2xl cursor-pointer transition-all duration-300 hover:text-blue-300" 
              v-for="item in menuItems">
                {{ item }}
          </li>
        </ul>
      </div>
      
    </div>
  </header>
</template>

<style scoped>
 
</style>
