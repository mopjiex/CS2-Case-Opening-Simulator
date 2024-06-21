<script setup lang="ts">
import { onMounted } from "vue";
import { useCaseStore } from "@/store/CaseStore";
import { useRouter } from "vue-router";

const caseStore = useCaseStore();

const router = useRouter();

const navigateToCase = (index: number): void => {
    router.push(`/inventory/case/${caseStore.casesData[index].id}`);
};

onMounted(caseStore.getCases);
</script>

<template>
    <div class="inventory-content">
        <h1 class="text-4xl text-center mb-6">Инвентарь кейсов</h1>
        <div
            class="flex gap-4 flex-wrap justify-center text-black"
            v-if="!caseStore.casesLoading"
        >
            <div
                class="case-box py-2 px-4 my-gradient rounded-md cursor-pointer transition-all duration-300
                    hover:scale-110"
                v-for="(itemCase, indexCase) in caseStore.casesData"
                @click="navigateToCase(indexCase)"
            >
                <div class="flex items-center mx-auto w-32 h-32">
                    <img :src="itemCase.image" />
                </div>
                <div class="text-xl">
                    <div
                        class="border-t-8 rounded-xl border-[#4682B4] mb-6"
                    ></div>
                    <h2 class="text-center">{{ itemCase.name }}</h2>
                </div>
            </div>
        </div>
        <div v-else>Загрузка...</div>
    </div>
</template>
