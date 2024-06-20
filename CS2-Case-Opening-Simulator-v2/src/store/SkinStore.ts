import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';

export const useSkinStore = defineStore('skin', () => {
    const skinInventory = ref([])
    const testArray = ref([])
    const isSkinLoading = ref(true)
    const postInventory = async(d) => {
        const {data} = await axios.post('https://9e969ab0aa511a0e.mokky.dev/inventory', d)
    }

    const fetchInventory = async() => {
        isSkinLoading.value = true
        try {
            const {data} = await axios.get('https://9e969ab0aa511a0e.mokky.dev/inventory')
            skinInventory.value = data
        } catch(e) {
            console.log(e)
        }
        
        isSkinLoading.value = false
    }
    return { skinInventory, testArray, isSkinLoading, postInventory, fetchInventory }
});