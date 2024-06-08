<script setup>
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {cases} from '@/library/Cases';
import 'swiper/css';

const props = defineProps({
    caseIndex: Number,
    skins: Object,
})

let interval = ref(100);
let currentSwiper = ref(null);
const onSwiper = swiper => currentSwiper.value = swiper;

const changeSkins = () => {
    const audio = new Audio();
    // audio.src = '/sound/sound.mp3';
    // audio.play();
    let i = 0;

    const recursiveTimeout = () => {
        if(i <= 40) {
            currentSwiper.value.slideNext();
            let delay = interval.value;
            i++;
            setTimeout(recursiveTimeout, delay);
        }
    }
  
    recursiveTimeout();
}


  setTimeout(changeSkins, 100);

</script>


<template>
    <div class="app h-[100vh] bg-[#262630]">
        <div class="container m-w-[1440px] m-auto px-[10px]">
            <div class="wrapper relative pt-[100px] h-screen">
                <swiper class="swiper mb-[25px]"
                        :slides-per-view="5"
                        :space-between="50"
                        @swiper="onSwiper">
                    <swiper-slide class="slide p-5 h-[200px] border border-black 
                                        text-center flex items-center justify-center" 
                        v-for="skin in skins"
                        :style="{background: skin.background, borderBottom: `6px solid ${skin.color}`}">
                            <img class="h-[150px]"
                            :src="`/cases/${cases[caseIndex].src}/${skin.src}.png`">
                    </swiper-slide>
                </swiper>
                <div class="band absolute w-[3px] h-[21.7%] bg-[#aaaa39] top-[9.8%] left-1/2 z-10"></div>
            </div> 
        </div>
    </div>
</template>


<style scoped>

</style>