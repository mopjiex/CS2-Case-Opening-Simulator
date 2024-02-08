<script setup>
import {ref} from 'vue';
import homeImg from '@/assets/images/home.png';
import tvImg from '@/assets/images/tv.png';
import settingsImg from '@/assets/images/settings.png';
import offImg from '@/assets/images/off.png';

const images = [homeImg, tvImg, settingsImg, offImg];
const menuItems = ['Инвентарь', 'Снаряжение', 'Играть', 'Магазин', 'Новости'];


</script>

<template>
    <header class="pt-2.5 w-95/100 h-7/100 bg-[#38414a] font-roboto">
        <div class="mx-auto px-2.5 max-w-[1520px]">
          <div class="flex item-center justify-between">
            <div class="flex items-center gap-x-12">
              <div class="p-1 cursor-pointer transition-all duration-300 hover:bg-gray-400 hover:rounded-md" v-for="image in images">
                <img :src="image" class="w-5 h-5">
              </div>
            </div>

            <ul class="flex items-center gap-x-5  mr-15vw">
              <li class="menu__item" v-for="item in menuItems">{{ item }}</li>
            </ul>

          </div>
        </div>
    </header>
</template>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap');

  /* .header {
    padding-top: 10px;
    width: 95vw;
    height: 7vh;
    background-color: #38414a;
    font-family: 'Roboto Condensed', sans-serif;
  } */

  /* .container {
    max-width: 1520px;
    padding: 0 10px;
    margin: 0 auto;
  } */

  /* .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */

  /* .header__left {
    display: flex;
    align-items: center;
    gap: 0 50px;
  } */

  /* .header__i {
    padding: 5px;
    cursor: pointer;
    transition: all .3s;
  }


  .header__i:hover {
    background-color: rgba(221, 221, 221, .4);
    border-radius: 5px;
  } */
  
  /* .header__img {
    width: 20px;
    height: 20px;

  } */
  .menu {
    display: flex;
    align-items: center;
    gap: 0 20px;
    margin-right: 15vw;
  }
  .menu__item {
    color: #fff;
    text-transform: uppercase;
    font-size: 24px;
    cursor: pointer;
    transition: all .3s;
  }
  .menu__item::after {
    content: '';
    border-right: 1px solid #fff;
    width: 10px;
    height: 10px;
    margin-left: 30px;
  }

  .menu__item:last-child::after{
    border: none;
  }

  .menu__item:hover {
    color: #89d6f0;
  }

</style>
