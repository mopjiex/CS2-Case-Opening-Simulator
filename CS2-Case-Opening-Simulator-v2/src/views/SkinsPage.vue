<script setup>
import {
    bgColorClass,
    textColorClass,
    keyCost,
    skinValue,
    profitLoss,
} from "@/utils";
import { onMounted, ref } from "vue";
import SkinProfitSummary from "@/components/Skins/SkinProfitSummary.vue";
import SkinList from "@/components/Skins/SkinList.vue";
import ButtonsPanel from "@/components/Skins/ButtonsPanel.vue";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { deleteItemInventory, fetchInventory } = store;
const { skinInventory, arr, isSkinLoading, isPanelActive } = storeToRefs(store);

const activatePanel = () => {
    isPanelActive.value = true;
};

const deactivatePanel = () => {
    isPanelActive.value = false;
};

const deleteItemAll = async () => {
    while (skinInventory.value.length > 0) {
        const itemId = skinInventory.value[0].id;
        console.log(`${skinInventory.value[0]}[${itemId}] - удален`);
        await deleteItemInventory(itemId);
        skinInventory.value = skinInventory.value.filter(
            (item) => item.id !== itemId
        );
    }
};

const deleteItem = async () => {
    while (arr.value.length > 0) {
        const itemId = arr.value[0].id;
        console.log(`${skinInventory.value[0]}[${itemId}] - удален`);
        await deleteItemInventory(itemId);

        skinInventory.value = skinInventory.value.filter(
            (item) => item.id !== itemId
        );
        arr.value = arr.value.filter((item) => item.id !== itemId);
        fetchInventory();
    }
};

onMounted(fetchInventory);
</script>

<template>
    <div
        class="min-h-[100vh-60px] bg py-6 text-white"
    >
        <div
            class="container mx-auto px-2"
            v-if="!isSkinLoading && skinInventory.length !== 0"
        >
            <div class="flex items-end justify-between mb-6">
                <SkinProfitSummary
                    :keyCost="keyCost(skinInventory.length)"
                    :skinValue="skinValue(skinInventory)"
                    :profitLoss="
                        profitLoss(skinInventory, skinInventory.length)
                    "
                />

                <ButtonsPanel
                    v-if="!isPanelActive"
                    :btn1="{
                        bg: '#92A8D1',
                        text: 'black',
                        desc: 'Выбрать',
                        func: activatePanel,
                    }"
                    :btn2="{
                        bg: '#E74C3C',
                        text: 'white',
                        desc: 'Удалить все',
                        func: deleteItemAll,
                    }"
                />
                <ButtonsPanel
                    v-else
                    :btn1="{
                        bg: '#92A8D1',
                        text: 'black',
                        desc: 'Убрать все',
                        func: deactivatePanel,
                    }"
                    :btn2="{
                        bg: '#E74C3C',
                        text: 'white',
                        desc: 'Удалить',
                        func: deleteItem,
                    }"
                />
            </div>

            <SkinList :skins="skinInventory" />
        </div>
        <div class="text-4xl text-center" v-else>Нет скинов!</div>
    </div>
</template>
