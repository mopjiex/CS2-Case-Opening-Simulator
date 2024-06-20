<script setup>
import { useSkinStore } from "@/store/SkinStore";
import { bgColorClass, textColorClass } from "@/utils/colorUtils";
import { onMounted, ref } from "vue";

const skinStore = useSkinStore();

const moneyKey = () => {
    return skinStore.skinInventory.length * 230;
}

const totalPrice = ref(0)

const TP = () => {
    return totalPrice.value = skinStore.skinInventory.reduce((s, i) => s+i.price, 0)
}

const PMR = () => {
    return totalPrice.value - moneyKey()
}
onMounted(skinStore.fetchInventory)
</script>

<template>
    <div
        class="min-h-screen bg-no-repeat bg-center bg-cover py-24 text-white"
        style="background-image: url(/images/openCase-bg.jpg)"
    >
        <div class="container mx-auto px-2" v-if="!skinStore.isSkinLoading">
            <h1 class="text-4xl text-center mb-6">Инвентарь скинов</h1>
            <div class="text-xl mb-6">
                <h2>Сумма потраченных рублей на ключи: {{ moneyKey() }}руб</h2>
                <h2>Сумма стоимости выбитого дропа: {{ TP() }}руб</h2>
                <h2>Насколько ушли в + или - : {{ PMR() }}руб</h2>
            </div>

            <div
                class="flex justify-center gap-6 flex-wrap"
            >
                <div
                    class="bg-[#D8BFD8] pt-2 flex flex-col justify-between"
                    v-for="skin in skinStore.skinInventory"
                >
                    <h2 class="text-center font-bol">
                        {{ skin.name }}
                    </h2>
                    <div class="px-4">
                        <img :src="skin.image" />
                    </div>
                    <div
                        class="h-2 w-full"
                        :class="bgColorClass(skin.color)"
                    ></div>
                </div>
            </div>
        </div>
        <div class="" v-else> Нет скинов!</div>
    </div>
</template>
