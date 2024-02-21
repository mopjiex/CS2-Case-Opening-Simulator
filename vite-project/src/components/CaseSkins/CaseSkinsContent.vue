<script setup>
//Тут скины с кейса отдельного


import {cases} from '@/library/Cases';

const props = defineProps({
    caseIndex: Number,
});


const emit = defineEmits();

const closePage = () => {
    emit('close');
}

const openPage = () => {
    emit('open');
}

</script>


<template>
    <div class="case-skins-content__inner py-2 relative h-full w-full mt-[425px]">
        <div class="blur absolute w-full h-full bg-[#323942] opacity-40 z-1"></div>
        <div class="container mx-auto px-2.5 max-w-[1520px]">
            <h2 class="case-skins-content__title text-[18px] mt-5 mb-2">
                Внутри находится один из следующих скинов
            </h2>

            <div class="skins relative flex items-center flex-wrap gap-[30px] 
                        h-[40vh] overflow-auto z-2 mb-[20px]">
                <div class="skin bg-gradient-to-b from-gray-500 
                            w-[130px] h-[130px] bg-[#f4faff] p-2" 
                    v-for="skin in cases[caseIndex].skins"
                    :style="{borderBottom: `4px solid ${skin.color}`, background: skin.background}">

                    <img class="skin__img"
                        :src="`/cases/${cases[caseIndex].src}/${skin.src}.png`">

                    <p class="skin__desc mt-10">
                        {{ skin.nameSkin }}
                    </p>
                </div>
            </div>
            <div class="case-skins-content__btns flex justify-end relative z-5 gap-x-5 text-white">
                <button class="case-skins-content__btn-open py-2 px-5 bg-[#0fa055] rounded-md 
                            transition-all duration-300 hover:bg-[#14c96b]"
                        @click="openPage">
                            Открыть
                </button>

                <button class="case-skins-content__btn-close font-bold transition-all 
                            duration-300 hover:text-[#cac9c9]" 
                        @click="closePage">
                            Закрыть
                </button>
            </div>       
        </div>
    </div>
</template>

<style scoped>
.skins::-webkit-scrollbar {
  width: 1px;
}
.skins::-webkit-scrollbar-track{
  background-color: transparent;
}
</style>