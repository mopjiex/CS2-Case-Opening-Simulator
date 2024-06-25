<script setup>
import { bgColorClass, textColorClass, keyCost, skinValue, profitLoss } from "@/utils";
import { onMounted, ref } from "vue";
import SkinProfitSummary from "@/components/InventorySkins/SkinProfitSummary.vue";
import SkinList from "@/components/InventorySkins/SkinList.vue";
import ButtonsPanel from "@/components/InventorySkins/ButtonsPanel.vue";
import { useStore } from "@/store";
const store = useStore()



const activatePanel = () => {
    store.isPanelActive = true;
};

const deactivatePanel = () => {
    store.isPanelActive = false;
};

onMounted(store.fetchInventory);
</script>

<template>
    <div
        class="min-h-screen bg-no-repeat bg-center bg-cover pt-24 pb-16 text-white"
        style="background-image: url(/images/openCase-bg.jpg)"
    >
        <div
            class="container mx-auto px-2"
            v-if="
                !store.isSkinLoading && store.skinInventory.length !== 0
            "
        >
            <h1 class="text-4xl text-center mb-6">Инвентарь скинов</h1>
            <div class="flex items-end justify-between mb-6">
                <SkinProfitSummary
                    :keyCost="keyCost(store.skinInventory.length)"
                    :skinValue="skinValue(store.skinInventory)"
                    :profitLoss="
                        profitLoss(
                            store.skinInventory,
                            store.skinInventory.length
                        )
                    "
                />

                <ButtonsPanel
                    v-if="!store.isPanelActive"
                    btn1Desc="Выбрать"
                    btn2Desc="Удалить все"
                    btn1Bg="#66C7B4"
                    btn2Bg="#66C7B4"
                    btn1Text="black"
                    btn2Text="black"
                    :btn1Func="activatePanel"
                />
                <ButtonsPanel
                    v-else
                    btn1Desc="Убрать все"
                    btn2Desc="Удалить"
                    btn1Bg="#99CCFF"
                    btn2Bg="#FF4500"
                    btn1Text="black"
                    btn2Text="white"
                    :btn1Func="deactivatePanel"
                />
            </div>

            <SkinList
                :skins="store.skinInventory"
            />
        </div>
        <div class="text-4xl text-center" v-else>Нет скинов!</div>
    </div>
</template>
