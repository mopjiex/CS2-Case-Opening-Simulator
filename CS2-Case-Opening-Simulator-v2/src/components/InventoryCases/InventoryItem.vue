<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store";
import { bgColorClass } from "@/utils";

const route = useRoute();
const router = useRouter();
const ID = route.params.id;

const store = useStore();

const openCase = () => {
    router.push(`/open`);
};

onMounted(() => {
    store.getSkins(+ID);
    console.log(+ID);
});

//:class="skin.color ? colors[skin.color] : ''"
</script>

<template>
    <div
        class="flex justify-center gap-8 flex-wrap mb-16 font-archiv"
        v-if="!store.skinsLoading"
    >
        <div
            class="p-6 text-black font-bold rounded-md flex flex-col justify-between items-center w-[270px]"
            v-for="skin in store.skinsData.skins"
            :style="{ backgroundColor: bgColorClass(skin.color) }"
        >
            <div class="w-[130px] h-[100px] mb-6">
                <img :src="skin.image" />
            </div>
            <h2 class="text-center uppercase">{{ skin.name }}</h2>
        </div>
    </div>
    <div class="" v-else>Загрузка...</div>

    <div class="flex justify-center">
        <button
            class="py-6 px-10 bg-[#B4F8C8] text-black font-bold rounded-md"
            @click="openCase"
        >
            Открыть
        </button>
    </div>
</template>
