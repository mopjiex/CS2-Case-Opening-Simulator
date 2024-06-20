<script setup lang="ts">
import { bgColorClass } from "@/utils/colorUtils";
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
                <p>{{ skin.name }}</p>
                <div
                    class="h-2 w-full rounded-bl-md rounded-br-md"
                    :class="bgColorClass(skin.color)"
                ></div>
            </div>
        </swiper-slide>
    </swiper>
</template>
