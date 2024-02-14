<script setup>
import {ref} from 'vue';
  import homePage from '@/views/Home.vue'
  import {Swiper, SwiperSlide} from 'swiper/vue';
  import {cases} from '@/library/Cases';
  import {addRandomElement, shuffleArray} from  '@/library/functions';
  import 'swiper/css';


  const colors = {
    blue: [],
    purple: [],
    violet: [],
    red: [],
    yellow: [],
  };

  const blue = [];
  const purple = [];
  const violet = [];
  const red = [];
  const yellow = [];

  const caseList = cases[0].skins;
  for(let i = 0; i < caseList.length; i++) {
    colors[caseList[i].color].push([caseList[i].src, caseList[i].color]);
  }


  console.log(colors);
 let array = [...addRandomElement(colors.blue, 25), ...addRandomElement(colors.purple, 15),
              ...addRandomElement(colors.violet, 7), ...addRandomElement(colors.red, 4), 
              ...addRandomElement(colors.yellow, 2)
            ];
 array = shuffleArray(array);

 console.log(array)
  


  let arr = Array.from({length: 1000}, (item, index) => index + 1);
  let count = ref(0);
  let y = ref(50);
  let swip = ref(null);
  const onSwiper = swiper => swip.value = swiper;

  const onSlideChange = () => console.log(swip.value.activeIndex)

  const f = () => {
    const audio = new Audio();
    audio.src = '/sound/sound.mp3';
    audio.play();
    let i = 0;
  
    const recursiveTimeout = () => {
      if(i < 50) {
        swip.value.slideNext();
      
        let delay = y.value;
        if(i >= 14) {
          delay = 200;
        }

        else if(i >= 18) {
          delay = 500;
        }
        else if(i >= 22) {
          delay = 5000;
        }
      
        i++;
        setTimeout(recursiveTimeout, delay);
      }
  }
  
  recursiveTimeout();
}
  
</script>

<template>
  <!-- <homePage/> -->
  <div class="app h-screen bg-[#347bcc]">
    <div class="container">
      <div class="wrapper">
        <swiper ref="swip" class="swiper"
        :slides-per-view="5"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        <swiper-slide class="slide p-5" 
          v-for="item in array"

          >

            <img :src="`/cases/revolution/${item}.png`" alt="">
        </swiper-slide>
      
      </swiper>
      <div class="band"></div>
      </div>
      <button @click="f">Кнопка</button>
      </div>
  </div>

</template>

<style scoped>
.container {
  max-width: 1440px;
  padding: 0 10px;
  margin: 0 auto;
}
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.slide { 
  height: 200px;
  border: 1px solid #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.band {
  position: absolute;
  width: 2px;
  height: 30%;
  background-color: blueviolet;
}
</style>
