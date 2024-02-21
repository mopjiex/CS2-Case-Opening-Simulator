<script setup>
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {cases} from '@/library/Cases';
import {addRandomElement, shuffleArray} from  '@/library/functions';
import 'swiper/css';

const props = defineProps({
    caseIndex: Number,
    skins: Object
})

const emit = defineEmits();

const skins = ref([]);

const caseSkins = cases[props.caseIndex].skins;

    const colors = {
        blue: [],
        purple: [],
        violet: [],
        red: [],
        yellow: [],
    };

  

    for(let i = 0; i < caseSkins.length; i++) {
        const {src, nameSkin, color, background} = caseSkins[i];
        colors[color].push({src, nameSkin, color, background});
    }


    // const {blue, purple, violet, red, yellow} = colors;
    // skins.value = [...addRandomElement(blue, 50), ...addRandomElement(purple, 12),
    //           ...addRandomElement(violet, 5), ...addRandomElement(red, 3), 
    //           ...addRandomElement(yellow, 2)
    // ];
    // skins.value = shuffleArray(skins.value);


    let interval = ref(100);
    let currentSwiper = ref(null);
    const onSwiper = swiper => currentSwiper.value = swiper;
    const activeIndex = ref(0);

    const onSlideChange = () => {
        activeIndex.value = currentSwiper.value.activeIndex;
        // const currentActiveIndex = () => emit('currentActiveIndex', activeIndex.value);
    }

    const changeSkins = () => {
    const audio = new Audio();
    // audio.src = '/sound/sound.mp3';
    // audio.play();
    let i = 0;

    const recursiveTimeout = () => {
        if(i <= 40) {
            currentSwiper.value.slideNext();
            let delay = interval.value;
            // if(i >= 10) delay = 300;
            // if(i >= 18) delay = 400;
            // if(i >= 23) delay = 500;
            // if(i >= 25) delay = 700;
            i++;
            setTimeout(recursiveTimeout, delay);
        }
    }
  
    recursiveTimeout();
}
  setTimeout(changeSkins, 100);
  
//   const currentActiveIndex = () => emit('currentActiveIndex', activeIndex.value);
  const currentSkins = () => emit('currentSkins', skins.value);

</script>


<template>
    <div class="app h-[100vh] bg-[#262630]">
        <div class="container m-w-[1440px] m-auto px-[10px]">
            <div class="wrapper relative pt-[100px] h-screen">
                <swiper class="swiper mb-[25px]"
                        :slides-per-view="5"
                        :space-between="50"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange">
                    <swiper-slide class="slide p-5 h-[200px] border border-black 
                                        text-center flex items-center justify-center" 
                                v-for="skin in skins"
                                :style="{background: skin.background, borderBottom: `6px solid ${skin.color}`}">
                        <img :src="`/cases/${cases[caseIndex].src}/${skin.src}.png`">
                    </swiper-slide>
                </swiper>
                <div class="band absolute w-[3px] h-[21.7%] bg-[#aaaa39] top-[10.8%] left-1/2 z-10"></div>
            </div> 
        </div>
    </div>
</template>


<style scoped>

</style>