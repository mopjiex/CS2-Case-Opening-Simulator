<script setup>
//import {getImageUrl} from '../library/functions';
const images = ['home.png', 'tv.png', 'settings.png', 'off.png']
const menuItems = ['Инвентарь', 'Снаряжение', 'Играть', 'Магазин', 'Новости'];

</script>

<template>
  <header class="header pt-2.5 w-96/100 h-7/100 bg-[#38414a] font-roboto">
    <div class="container mx-auto px-2.5 max-w-[1520px]">
      <div class="header__content flex item-center justify-between">
        <div class="header__icons flex items-center gap-x-12">
          <div class="header__icon p-1 cursor-pointer transition-all duration-300 hover:bg-gray-400 hover:rounded-md" 
              v-for="image in images">
            <img :src="`/images/${image}`" class="header__icon-img w-5 h-5">
          </div>
        </div>

        <ul class="header__menu flex items-center gap-x-14 mr-15vw">
          <li class="header__menu-item text-white uppercase text-2xl cursor-pointer transition-all duration-300 hover:text-blue-300" 
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
