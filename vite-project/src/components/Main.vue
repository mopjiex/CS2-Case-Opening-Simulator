<script setup>
import {getImageUrl} from '@/library/functions';
import {cases} from '@/library/Cases';
const menuItems = ['Все', 'Экипировка', 'Графика', 'Контейнеры', 'Профиль', 'Контакт обмена', 'Торговая площадка'];

</script>

<template>
    <main class="main">
        <section class="pt-3">
            <div class="mx-auto px-2.5 max-w-[1520px]">
                <div class="inventory__top">
                    <ul class="flex items-center gap-x-10 justify-center">
                        <li class="p-2.5 uppercase text-white text-lg font-semibold cursor-pointer transition-all 
                            duration-300 hover:bg-[#415e6e] hover:text-[#8ed4ed] hover:rounded-md">
                            <img class="w-8 h-8" :src="getImageUrl('../assets/images/', 'search.png')">
                        </li>
                        <li class="p-2.5 uppercase text-white text-lg font-semibold cursor-pointer transition-all 
                            duration-300 hover:bg-[#415e6e] hover:text-[#8ed4ed] hover:rounded-md" v-for="item in menuItems">
                            {{ item }}
                        </li>
                       
                    </ul>
                </div>

                    <div class="inventory__cases">
                    <div class="inventory__case" v-for="c in cases">
                        <img :src="getImageUrl('../assets/cases/', `${c.src}.png`)" class="inventory__case-img">
                        <p class="text">{{c.nameCase}}</p>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
</template>

<style scoped>
 .main {
    background-color: #474a59;
    min-height: 93vh;
  }

  .inventory__top {
    margin-bottom: 40px;
  }

  .wrap {
    width: 100%;
    margin: 0 auto;
  }
  .inventory__cases {
    display: flex;
    flex-wrap: wrap; 
    align-items: center;
    gap: 40px;
  }
  .inventory__case {
    width: 180px;
    height: 180px;
    background: linear-gradient(to bottom, gray, white);
    border-bottom: 8px solid #b2c4da;
    cursor: pointer;
  }

  .text {
    color: #fff;
    margin-top: 40px;
  }
</style>