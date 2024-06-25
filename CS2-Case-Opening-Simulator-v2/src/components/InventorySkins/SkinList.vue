<script setup>
import { ref, watch } from "vue";
import { bgColorClass, textColorClass } from "@/utils";
import { useStore } from "@/store";

const store = useStore()

const { skins } = defineProps({
    skins: Array,
});

const items = ref(skins.map(() => ({ checked: false })));

const checkboxChecked = (index) => {
    items.value[index].checked = !items.value[index].checked;
};

watch(
    () => store.isPanelActive,
    (value) => {
        if (!value) items.value.forEach((item) => (item.checked = false));
    }
);
</script>

<template>
    <div class="scroll h-[600px] overflow-y-auto pt-6">
        <div class="flex justify-center gap-6 flex-wrap">
            <div
                class="pt-2 flex flex-col justify-between relative"
                :class="
                    skin.color === 'blue'
                        ? 'blue'
                        : skin.color === 'purple'
                        ? 'purple'
                        : skin.color === 'pink'
                        ? 'pink'
                        : skin.color === 'red'
                        ? 'red'
                        : 'yellow'
                "
                v-for="(skin, index) in skins"
            >
                <div class="">
                    <h2 class="text-center font-bol mb-6">
                        {{ skin.name }}
                    </h2>
                </div>

                <div class="px-4 w-[220px] h-[180px]">
                    <img :src="skin.image" />
                </div>
                <div class="h-2 w-full" :class="bgColorClass(skin.color)"></div>

                <div
                    class="w-8 h-8 bg-red-500 absolute -top-4 -right-4 flex justify-center items-center"
                    v-if="store.isPanelActive"
                >
                    <input
                        class="w-6 h-6"
                        type="checkbox"
                        :checked="items[index].checked"
                        @click="checkboxChecked(index)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scroll::-webkit-scrollbar {
    width: 5px;
}

.scroll::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 5px;
}

.scroll::-webkit-scrollbar-thumb:hover {
    background-color: #b8b7b7;
}
</style>
