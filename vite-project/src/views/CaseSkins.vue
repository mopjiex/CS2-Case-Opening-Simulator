<script setup>
import {ref} from 'vue'
import {cases} from '@/library/Cases';
import caseSkinsTop from '@/components/CaseSkins/CaseSkinsTop.vue';
import caseSkinsContent from '@/components/CaseSkins/CaseSkinsContent.vue';
import skinsSlider from '@/views/SkinsSlider.vue';
const props = defineProps({
    show: Boolean,
    caseIndex: Number,
})

const emit = defineEmits();

const visibleSlider = ref(false);

const closePage = () => {
    emit('update:show', false);
}
</script>

<template>
    <div class="modal w-full h-screen bg-[#14171b] absolute top-0 left-0 text-[#cfd4d8] pt-8" v-if="show" >
        <skinsSlider
            :caseIndex="caseIndex"
            v-model:showSlider="visibleSlider"
        />
        <caseSkinsTop 
            :caseIndex="caseIndex"
        />
        <caseSkinsContent 
            :caseIndex="caseIndex"
            @click="closePage"
        />
    </div>
</template>

<style scoped>



</style>