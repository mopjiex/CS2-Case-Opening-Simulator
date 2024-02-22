<script setup>
    import mySkin from '@/components/CaseSkins/SkinSlider/Skin.vue';
    import skinsSlider from '@/components/CaseSkins/SkinSlider/SkinSlider.vue';
    import {ref} from 'vue';
    import {cases} from '@/library/Cases';
    import {addRandomElement, shuffleArray} from  '@/library/functions';
    
    const props = defineProps({
        caseIndex: Number,
        showSlider: Boolean,
    });

    const emit = defineEmits();
   
    const show = ref(false);
    const activeIndex = ref(43);

    const caseSkins = cases[props.caseIndex].skins;
    const colors = {
        blue: [],
        purple: [],
        violet: [],
        red: [],
        yellow: [],
    };

    for(let i = 0; i < caseSkins.length; i++) {
        const {src, nameSkin, color, background} = caseSkins[i];
        colors[color].push({src, nameSkin, color, background});
    }

    const {blue, purple, violet, red, yellow} = colors;
    let skins = ref([...addRandomElement(blue, 50), ...addRandomElement(purple, 12),
              ...addRandomElement(violet, 5), ...addRandomElement(red, 3), 
              ...addRandomElement(yellow, 2)
    ]);

    skins.value = shuffleArray(skins.value);

    setTimeout(() => show.value = true, 7000)
    

</script>

<template>
    <my-skin 
        :skin="skins"
        :caseIndex="caseIndex"
        :activeIndex="activeIndex"
        v-if="show"
    />
    <skins-slider
        :skins="skins"
        :caseIndex="caseIndex"
        v-else
    />
</template>

<style scoped>

</style>