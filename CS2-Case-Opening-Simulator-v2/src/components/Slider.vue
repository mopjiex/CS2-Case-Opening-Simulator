<script setup lang="ts">
import { bgColorClass } from "@/utils";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

defineProps({
    onSwiper: Function,
    sliderPerViews: Number,
    spaceBetWeen: Number,
    skins: Array,
});

const modules = [Pagination];
</script>

<template>
    <div class="relative">
        <swiper
            class="w-[600px]"
            :slidesPerView="sliderPerViews"
            :spaceBetween="spaceBetWeen"
            :modules="modules"
            @swiper="onSwiper"
        >
            <swiper-slide v-for="(skin, index) in skins" :key="index">
                <div class="bg-gray-400 rounded-md">
                    <img :src="skin.image" />
                    <div class="h-2 w-full rounded-bl-md rounded-br-md"></div>
                    <div
                        class="h-2 w-full"
                        :style="{ backgroundColor: bgColorClass(skin.color) }"
                    ></div>
                </div>
            </swiper-slide>
        </swiper>
        <div
            class="w-[1px] h-[144px] bg-yellow-300 absolute top-0 left-[50%] translate-x-[-50%] z-10"
        ></div>
    </div>
</template>
