<script setup>
import { bgColorClass, textColorClass } from "@/utils/colorUtils";
defineProps({
    skins: Array,
});
</script>

<template>
    <div class="scroll h-[600px] overflow-y-auto pt-6">
        <div class="flex justify-center gap-6 flex-wrap">
            <div
                class="pt-2 flex flex-col justify-between"
                :class="
                    skin.color === 'blue'
                        ? 'blue'
                        : skin.color === 'purple'
                        ? 'purple'
                        : skin.color === 'pink'
                        ? 'pink'
                        : skin.color === 'red'
                        ? 'red'
                        : 'yellow'
                "
                v-for="skin in skins"
            >   
            <div class="relative">
                <h2 class="text-center font-bol mb-6">
                    {{ skin.name }}
                </h2>

                <button class="absolute -top-4 -right-3 border p-2 rounded-full bg-[#ddd] text-black z-10">X</button>
            </div>
               
                <div class="px-4 w-[220px] h-[180px]">
                    <img :src="skin.image" />
                </div>
                <div class="h-2 w-full" :class="bgColorClass(skin.color)"></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .scroll::-webkit-scrollbar {
        width: 5px;
    }

    .scroll::-webkit-scrollbar-thumb {
        background-color: #ddd;
        border-radius: 5px;
    }

    .scroll::-webkit-scrollbar-thumb:hover {
        background-color: #b8b7b7;
    }
</style>
