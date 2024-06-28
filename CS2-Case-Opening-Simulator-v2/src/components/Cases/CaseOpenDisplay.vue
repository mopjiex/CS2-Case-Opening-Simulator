<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store";
import { bgColorClass } from "@/utils";
import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();
const ID = route.params.id;

const store = useStore();
const { casesData, skinsData, skinsLoading } = storeToRefs(store);
const { getSkins, getCases } = store;

const openCase = () => {
    router.push(`/open`);
};

const backToInventary = () => {
    router.push(`/inventory`);
};

onMounted(() => {
    getSkins(+ID);
    getCases();
    console.log(casesData.value);
});
</script>

<template>
    <div class="py-[20px] text-white font-archiv">
        <div class="container mx-auto px-2">
            <div class="text-center mb-2">
                <h1 class="text-2xl mb-2">Открыть контейнер</h1>
                <h2 class="text-xl">
                    Открыть кейс {{ casesData[ID - 1] ? casesData[ID - 1].name : '' }}
                </h2>
            </div>
            <div class="">
                <h3 class="mb-2">Предметы которые могут быть в этом кейсе</h3>
                <div class="w-full border-b"></div>
            </div>
            <div
                class="flex justify-center gap-8 flex-wrap mb-6 pt-[20px]"
                v-if="!skinsLoading"
            >
                <div
                    class="text-black flex flex-col justify-between max-w-[160px] w-[100%]"
                    v-for="skin in skinsData.skins"
                >
                    <div
                        class="px-2 py-2 skins border-l-8 mb-2"
                        :style="{ borderColor: bgColorClass(skin.color) }"
                    >
                        <div class="w-[130px] h-[100px] mb-6">
                            <img :src="skin.image" />
                        </div>
                    </div>

                    <div class="pl-2">
                        <h2 class="text-white text-sm">
                            {{ skin.weapon_name }}
                        </h2>
                        <h2 class="text-[#ddd]">{{ skin.skin_name }}</h2>
                    </div>
                </div>
            </div>
            <div class="" v-else>Загрузка...</div>

            <div class="border-t w-full mb-6"></div>
            <div class="flex justify-end gap-x-4">
                <button
                    class="px-4 py-2 bg-[#B4F8C8] text-black font-bold rounded-sm"
                    @click="openCase"
                >
                    Открыть
                </button>
                <button
                    class="px-4 py-2 bg-[#ddd] text-black font-bold rounded-sm"
                    @click="backToInventary"
                >
                    Закрыть
                </button>
            </div>
        </div>
    </div>
</template>
