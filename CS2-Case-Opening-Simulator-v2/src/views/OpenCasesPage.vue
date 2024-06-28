<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Slider from "@/components/Cases/SkinSwiper.vue";
import SkinDetailDisplay from "@/components/Cases/SkinDetailDisplay.vue";
import { bgColorClass, shuffle, rand, pushRandomItems } from "@/utils";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";

const router = useRouter();
const store = useStore();
const { skinsData } = storeToRefs(store);
const { postInventory } = store;

const currentSwiper = ref<any>(null);
const slideInterval = ref<number>(100);
const isFinished = ref<boolean>(false);
const slideIndex = ref<number>(0);

const blueSkins = skinsData.value.skins.filter((item) => item.color === "blue");
const purpleSkins = skinsData.value.skins.filter(
    (item) => item.color === "purple"
);
const pinkSkins = skinsData.value.skins.filter((item) => item.color === "pink");
const redSkins = skinsData.value.skins.filter((item) => item.color === "red");
const yellowSkins = skinsData.value.skins.filter(
    (item) => item.color === "yellow"
);

const shuffledSkins = ref(
    shuffle([
        ...pushRandomItems(blueSkins, 25),
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
    postInventory(shuffledSkins.value[slideIndex.value + 1]);
};

const handleClose = () => {
    skinAddition();
    isFinished.value = false;
    router.push("/inventory");
};
</script>

<template>
    <div class="min-h-screen bg py-24 font-archiv">
        <div class="container mx-auto px-2">
            <div class="flex justify-center" v-if="!isFinished">
                <Slider
                    :onSwiper="onSwiper"
                    :sliderPerViews="3"
                    :spaceBetWeen="30"
                    :skins="shuffledSkins"
                />
            </div>

            <SkinDetailDisplay
                v-else
                :shiffledSkins="shuffledSkins[slideIndex + 1]"
                :close="handleClose"
            />
        </div>
    </div>
</template>
