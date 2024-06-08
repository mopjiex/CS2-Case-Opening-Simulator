<script setup>
import {ref} from 'vue'
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
const openPage = () => {
    visibleSlider.value = true;
}

const closeModal = () => {
    visibleSlider.value = false;
    emit('update:show', false);
}

</script>

<template>
    <div class="modal w-full bg-[#14171b] text-[#cfd4d8]" v-if="show" >
        <skinsSlider v-if="visibleSlider"
            :caseIndex="caseIndex"
            @closeModal="closeModal"
        />

        <div class="wrapper" v-else>
            <caseSkinsTop 
            :caseIndex="caseIndex"
        />

        <caseSkinsContent 
            :caseIndex="caseIndex"
            @close="closePage"
            @open="openPage"
        />
        </div>
    </div>
</template>

<style scoped>



</style>