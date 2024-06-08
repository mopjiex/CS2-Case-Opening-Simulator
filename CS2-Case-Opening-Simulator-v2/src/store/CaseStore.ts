import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';
import { Case, SkinCase } from '@/utils/interfaces';

export const useCaseStore = defineStore('case', () => {
    const casesData = ref<Case[]>([]);
    const casesLoading = ref<boolean>(true);
   
    const getCases = async() => {
        casesLoading.value = true;
        try {
            const { data } = await axios.get('https://9e969ab0aa511a0e.mokky.dev/cases');
            casesData.value = data;
        } catch(e) {
            console.error(e)
        }
        casesLoading.value = false;
    };

    const skinsData = ref<SkinCase>({});
    const skinsLoading = ref<boolean>(true);
    const getSkins = async(id: number) => {
        skinsLoading.value = true;
        try {
            const { data } = await axios.get(`https://9e969ab0aa511a0e.mokky.dev/skins/${id}/?_relations=cases`);
            skinsData.value = data;
            console.log(skinsData.value)
        } catch(e) {
            console.error(e);
        }
        skinsLoading.value = false;
    }

    return {casesData, casesLoading, skinsData, skinsLoading, getCases, getSkins};
});
