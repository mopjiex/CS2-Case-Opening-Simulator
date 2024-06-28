<script setup>
import { bgColorClass } from "@/utils";

defineProps({
    shiffledSkins: Object,
    close: Function,
})

</script>

<template>
    <div class="flex flex-col items-center bg-gray-500 p-6">
        <p class="text-white mb-6 font-montserrat text-3xl">
            {{ shiffledSkins.weapon_name }} |
            {{ shiffledSkins.skin_name }}
        </p>
        <div
            class="border-b-[6px] w-full mb-6"
            :style="{
                borderColor: bgColorClass(shiffledSkins.color),
            }"
        ></div>
        <div class="mb-6 bg-[#ddd]">
            <img :src="shiffledSkins.image" alt="" />
            <div
                class="h-2 w-full"
                :class="bgColorClass(shiffledSkins.color)"
            ></div>
        </div>

        <button class="px-10 py-2 open" @click="close">ОК</button>
    </div>
</template>
