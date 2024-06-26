import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';
import { Case, SkinCase } from '@/utils/interfaces';

export const useStore = defineStore('store', () => {
    //Кейсы
    const casesData = ref<Case[]>([]);
    const casesLoading = ref<boolean>(true)

    const getCases = async () => {
        casesLoading.value = true
        try {
            const { data } = await axios.get('https://9e969ab0aa511a0e.mokky.dev/cases');
            casesData.value = data;
        } catch (e) {
            console.error(e)
        }
        casesLoading.value = false
    };

    const skinsData = ref<SkinCase>({})
    const skinsLoading = ref<boolean>(true)
    const getSkins = async (id: number) => {
        skinsLoading.value = true;
        try {
            const { data } = await axios.get(`https://9e969ab0aa511a0e.mokky.dev/skins/${id}/?_relations=cases`);
            skinsData.value = data
            console.log(skinsData.value)
        } catch (e) {
            console.error(e)
        }
        skinsLoading.value = false
    }
    //Скины
    const skinInventory = ref([])
    const testArray = ref([])
    const isSkinLoading = ref(true)
    const postInventory = async (d) => {
        const { data } = await axios.post('https://9e969ab0aa511a0e.mokky.dev/inventory', d)
    }

    const fetchInventory = async () => {
        isSkinLoading.value = true
        try {
            const { data } = await axios.get('https://9e969ab0aa511a0e.mokky.dev/inventory')
            skinInventory.value = data
        } catch (e) {
            console.log(e)
        }

        isSkinLoading.value = false
    }

    const deleteItemInventory = async (id) => {
        return await axios.delete(`https://9e969ab0aa511a0e.mokky.dev/inventory/${id}`)
    }

    //Остальное
    const isPanelActive = ref(false)
    const arr = ref([])

    return {
        casesData, casesLoading, skinsData, skinsLoading, getCases, getSkins,
        skinInventory, testArray, isSkinLoading, postInventory, fetchInventory, deleteItemInventory,
        isPanelActive, arr
    }

})