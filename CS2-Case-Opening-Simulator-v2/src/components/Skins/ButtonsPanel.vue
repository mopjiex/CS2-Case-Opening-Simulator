<script setup lang="ts">
defineProps({
    btn1: {
        type: Object,
        default: () => ({
            bg: String,
            text: String,
            desc: String,
            func: Function,
        }),
    },
    btn2: {
        type: Object,
        default: () => ({
            bg: String,
            text: String,
            desc: String,
            func: Function,
        }),
    },
});

const getBgClass = (bg) => `bg-[${bg}]`;
</script>

<template>
    <div class="flex gap-x-6">
        <button
            class="py-2 px-4 rounded-lg"
            :class="btn1.bg === '#92A8D1' ? 'choose' : ''"
            :style="{ color: btn1.text }"
            @click="btn1.func"
        >
            {{ btn1.desc }}
        </button>
        <button
            class="py-2 px-4 rounded-lg"
            :class="btn2.bg === '#E74C3C' ? 'delete' : ''"
            :style="{ color: btn2.text }"
            @click="btn2.func"
        >
            {{ btn2.desc }}
        </button>
    </div>
</template>
