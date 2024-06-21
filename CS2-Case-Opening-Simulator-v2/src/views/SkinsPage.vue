<script setup>
import { useSkinStore } from "@/store/SkinStore";
import { bgColorClass, textColorClass } from "@/utils/colorUtils";
import { onMounted, ref } from "vue";
import { keyCost, skinValue, profitLoss } from "@/utils/skinCalculations";
import SkinProfitSummary from "@/components/InventorySkins/SkinProfitSummary.vue";
import SkinList from "@/components/InventorySkins/SkinList.vue";


const skinStore = useSkinStore();

onMounted(skinStore.fetchInventory);
</script>

<template>
    <div
        class="min-h-screen bg-no-repeat bg-center bg-cover pt-24 pb-16 text-white"
        style="background-image: url(/images/openCase-bg.jpg)"
    >
        <div
            class="container mx-auto px-2"
            v-if="
                !skinStore.isSkinLoading && skinStore.skinInventory.length !== 0
            "
        >
            <h1 class="text-4xl text-center mb-6">Инвентарь скинов</h1>
            <SkinProfitSummary
                :keyCost="keyCost(skinStore.skinInventory.length)"
                :skinValue="skinValue(skinStore.skinInventory)"
                :profitLoss="profitLoss(skinStore.skinInventory, skinStore.skinInventory.length)"
            />
            <SkinList
                :skins="skinStore.skinInventory"
            />
           
        </div>
        <div class="" v-else>Нет скинов!</div>
    </div>
</template>
