<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { casesLoading, casesData } = storeToRefs(store)
const { getCases } = store

const router = useRouter();

const navigateToCase = (index: number): void => {
    router.push(`/inventory/case/${casesData.value[index].id}`);
};

onMounted(getCases);
</script>

<template>
    <div class="inventory-content pt-10">
        <div
            class="flex gap-4 flex-wrap justify-center text-black"
            v-if="!casesLoading"
        >
            <div
                class="case-box rounded-md cursor-pointer transition-all duration-300 hover:scale-110"
                v-for="(itemCase, indexCase) in casesData"
                @click="navigateToCase(indexCase)"
            >
                <div class="skins">
                    <div class="pt-2 px-4">
                        <div class="flex items-center mx-auto w-32 h-32">
                            <img :src="itemCase.image" />
                        </div>
                    </div>
                    <div class="border-t-8 border-[#4682B4] w-full"></div>
                </div>

                <div class="">
                    <h2 class="text-center text-white">{{ itemCase.name }}</h2>
                </div>
            </div>
        </div>
        <div v-else>Загрузка...</div>
    </div>
</template>
