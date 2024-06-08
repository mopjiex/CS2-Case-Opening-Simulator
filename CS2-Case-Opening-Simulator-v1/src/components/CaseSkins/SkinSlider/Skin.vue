<script setup>
import {ref, inject} from 'vue';
import {cases} from '@/library/Cases';

const props = defineProps({
    skin: Object,
    activeIndex: Number,
    caseIndex: Number,
})



const emit = defineEmits();

const closeModal = () => {
     emit('closeModal');
}


const skinsCases = inject('skinsCases');
skinsCases.value.push({
    src: props.skin[ props.activeIndex].src,
    background:  props.skin[ props.activeIndex].background,
    color:  props.skin[ props.activeIndex].color,
    nameSkin:  props.skin[ props.activeIndex].nameSkin,
    nameCase:  cases[props.caseIndex].src,
});


</script>

<template>
    <div class="skin h-screen bg-[#4e5054] pt-10">
        <div class="container m-w-[1440px] m-auto px-[10px]">
            <div class="skin__content">
                <h2 class="skin__title text-center text-5xl mb-10">
                    {{ skin[activeIndex].nameSkin }}
                </h2>
                <div class="skin__color mb-10 w-[350px] h-1 m-auto m-2.5"
                    :style="{backgroundColor: skin[activeIndex].color}">
                </div>
                <p class="skin__case text-center text-[26px] mb-[60px]">
                    {{cases[caseIndex].nameCase }}
                </p>
                <div class="skin__box-img w-[500px] h-500px 
                            flex items-center justify-center mt-0 m-auto mb-7"
                    :style="{background: skin[activeIndex].background}">
                    <img class="p-6" :src="`/cases/${cases[caseIndex].src}/${skin[activeIndex].src}.png`">
                </div>
                <button class="skin__btn bg-[#0fa055] py-[10px] px-[15px] 
                                rounded-[8px] block m-auto transition-all duration-300 hover:bg-[#0c7c42]" 
                        @click="closeModal">
                    Закрыть
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>