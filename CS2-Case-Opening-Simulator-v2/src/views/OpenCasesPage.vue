<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCaseStore } from "@/store/CaseStore";
import { useSkinStore } from "@/store/SkinStore";
import { bgColorClass } from "@/utils/colorUtils";
import Slider from "@/components/Slider.vue";
import { shuffle } from "@/utils/arrayUtils";

const router = useRouter();
const store = useCaseStore();
const skinStore = useSkinStore();

const currentSwiper: any = ref(null);
const slideInterval: number = ref(100);
const isFinished: boolean = ref(false);
const slideIndex: number = ref(0);

const blueSkins = store.skinsData.skins.filter((item) => item.color === "blue");
const purpleSkins = store.skinsData.skins.filter((item) => item.color === "purple");
const pinkSkins = store.skinsData.skins.filter((item) => item.color === "pink");
const redSkins = store.skinsData.skins.filter((item) => item.color === "red");
const yellowSkins = store.skinsData.skins.filter((item) => item.color === "yellow");

const rand = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min))
}
const Test = (arr, count) => {

for(let i = 0; i < count; i++) {
    console.log(count)
    arr.push(arr[rand(0, arr.length - 1)])
}

return arr;
}


const shuffledSkins = ref(shuffle([...Test(blueSkins, 18), ...Test(purpleSkins, 5), ...pinkSkins, ...redSkins, ...yellowSkins]));





const onSwiper = (swiper: any) => {
    currentSwiper.value = swiper;
};

const animateSkins = () => {
    console.log(shuffledSkins.value)
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



const skinAddition = async() => {

    skinStore.testArray.push(shuffledSkins.value[slideIndex.value - 2]);
    console.log(skinStore.testArray)
    skinStore.postInventory(shuffledSkins.value[slideIndex.value - 2])
};

const handleClose = () => {
    skinAddition();
    // console.log(skinStore.skinData);
    console.log(shuffledSkins.value[slideIndex.value])
    

    isFinished.value = false;
    router.push("/inventory");
};
</script>

<template>
    <div
        class="min-h-screen bg-no-repeat bg-center bg-cover py-24"
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
                        :class="bgColorClass(shuffledSkins[slideIndex + 1].color)"
                    ></div>
                </div>

                <button class="bg-green-500 px-10 py-2" @click="handleClose">
                    ОК
                </button>
            </div>
        </div>
    </div>
</template>
