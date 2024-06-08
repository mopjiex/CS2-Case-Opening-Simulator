<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { useCaseStore } from '@/store/CaseStore';

const store = useCaseStore();

    const swiperOptions = ref({
      loop: true,
      pagination: { clickable: true },
      navigation: true,
})
</script>


<template>
    <div class="min-h-screen bg-no-repeat bg-center bg-cover py-20" style="background-image: url(/images/openCase-bg.jpg)">
        <div class="container mx-auto px-2">
            <div class="">
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(skin, index) in store.skinsData.skins" :key="index">
                        <div>
                            <img :src="skin.image" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>