<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Slider from "@/components/Slider.vue";
import { bgColorClass, shuffle, rand, pushRandomItems } from "@/utils";
import { useStore } from "@/store";

const router = useRouter();
const store = useStore();

const currentSwiper = ref<any>(null);
const slideInterval = ref<number>(100);
const isFinished = ref<boolean>(false);
const slideIndex = ref<number>(0);

const blueSkins = store.skinsData.skins.filter((item) => item.color === "blue");
const purpleSkins = store.skinsData.skins.filter(
    (item) => item.color === "purple"
);
const pinkSkins = store.skinsData.skins.filter((item) => item.color === "pink");
const redSkins = store.skinsData.skins.filter((item) => item.color === "red");
const yellowSkins = store.skinsData.skins.filter(
    (item) => item.color === "yellow"
);

const shuffledSkins = ref(
    shuffle([
        ...pushRandomItems(blueSkins, 18),
        ...pushRandomItems(purpleSkins, 5),
        ...pinkSkins,
        ...redSkins,
        ...yellowSkins,
    ])
);

const onSwiper = (swiper: any) => {
    currentSwiper.value = swiper;
};

const animateSkins = () => {
    const recursiveTimeout = () => {
        if (slideIndex.value <= 30) {
            currentSwiper.value.slideNext();
            let delay = slideInterval.value;
            slideIndex.value += 1;
            setTimeout(recursiveTimeout, delay);
        }
        if (slideIndex.value == 30) {
            setTimeout(() => {
                isFinished.value = true;
            }, 1500);
        }
    };
    recursiveTimeout();
};

setTimeout(animateSkins, 100);

const skinAddition = () => {
    store.postInventory(shuffledSkins.value[slideIndex.value + 1]);
};

const handleClose = () => {
    skinAddition();
    isFinished.value = false;
    router.push("/inventory");
};
</script>

<template>
    <div
        class="min-h-screen bg-no-repeat bg-center bg-cover py-24 font-archiv"
        style="background-image: url(/images/openCase-bg.jpg)"
    >
        <div class="container mx-auto px-2">
            <div class="flex justify-center" v-if="!isFinished">
                <Slider
                    :onSwiper="onSwiper"
                    :sliderPerViews="3"
                    :spaceBetWeen="30"
                    :skins="shuffledSkins"
                />
            </div>

            <div class="flex flex-col items-center bg-gray-500 py-6" v-else>
                <p class="text-white mb-6">
                    {{ shuffledSkins[slideIndex + 1].name }}
                </p>
                <div class="mb-6 bg-[#ddd]">
                    <img :src="shuffledSkins[slideIndex + 1].image" alt="" />
                    <div
                        class="h-2 w-full"
                        :class="
                            bgColorClass(shuffledSkins[slideIndex + 1].color)
                        "
                    ></div>
                </div>

                <button class="bg-green-500 px-10 py-2" @click="handleClose">
                    ОК
                </button>
            </div>
        </div>
    </div>
</template>
