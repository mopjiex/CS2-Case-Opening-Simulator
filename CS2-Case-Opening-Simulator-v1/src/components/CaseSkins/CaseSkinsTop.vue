<script setup>
    import {cases} from '@/library/Cases';

    const props = defineProps({
        caseIndex: Number,
    })

    
</script>

<template>
    <div class="case-skins-top w-full h-screen bg-[#14171b] absolute top-0 left-0 text-[#cfd4d8] pt-8">
        <div class="container mx-auto px-2.5 max-w-[1520px]">
            <div class="case-skins-top__content">
                <h1 class="case-skins-top__title text-center text-6xl mb-3">
                    Открыть контейнер
                </h1>
                <img class="case-skins-top__img mx-auto mb-4"
                    :src="`/cases/${cases[caseIndex].src}.png`">
                <p class="case-skins-top__name text-center text-4xl mb-3">
                    {{ cases[caseIndex].nameCase }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
