<script setup lang="ts">
defineProps(({
    btn1Bg: String,
    btn2Bg: String,
    btn1Text: String,
    btn2Text: String,
    btn1Func: Function,
    btn2Func: Function,
    btn1Desc: String,
    btn2Desc: String
}))

</script>

<template>
    <div class="flex gap-x-6">
        <button 
            class="py-2 px-4 rounded-lg" 
            :style="{backgroundColor: btn1Bg, color: btn1Text}"
            @click="btn1Func">
            {{ btn1Desc }}
        </button>
        <button 
            class="py-2 px-4 rounded-lg"
             :style="{backgroundColor: btn2Bg, color: btn2Text}"
            @click="btn2Func"
            >
            {{ btn2Desc }}
        </button>
    </div>
</template>
