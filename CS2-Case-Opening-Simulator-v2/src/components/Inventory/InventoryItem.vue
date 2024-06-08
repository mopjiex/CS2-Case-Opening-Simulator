<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCaseStore } from '@/store/CaseStore';

const route = useRoute();
const router = useRouter();
const ID = route.params.id;

const caseStore = useCaseStore();

const colors: Record<string, string> = {
    'blue' : 'blue',
    'purple' : 'purple',
    'pink' : 'pink',
    'red' : 'red',
    'yellow' : 'yellow'
};

const openCase = () => {
    router.push(`/open`);
}


onMounted(() => {caseStore.getSkins(+ID); console.log(+ID)});
</script>

<template>
    <div class="flex justify-center gap-8 flex-wrap mb-16" v-if="!caseStore.skinsLoading">
        <div class="p-6 text-black font-bold rounded-md" v-for="skin in caseStore.skinsData.skins"
            :class="skin.color ? colors[skin.color] : ''"
        >
            <div class="w-24 h-24">
                <img :src="skin.image">
            </div>
            <h2 class="text-center">{{ skin.name }}</h2>
        </div>
    </div>
    <div class="" v-else>
        Загрузка...
    </div>

    <div class="flex justify-center">
        <button class="py-6 px-10 bg-[#B4F8C8] text-black font-bold rounded-md"
                @click="openCase"
        >
            Открыть
        </button>
    </div>
    
</template>