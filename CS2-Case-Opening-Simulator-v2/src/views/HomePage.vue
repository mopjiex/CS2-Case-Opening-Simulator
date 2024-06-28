<script setup lang="ts">
import { avatars } from '@/utils'


</script>

<template>
    <div
        class="home min-h-screen bg-no-repeat bg-cover bg-top"
        style="background-image: url('/bg.png')"
    >
        <div class="flex justify-end">
            <div class="relative z-10 w-16 min-h-screen menu-2">
                <div class="flex flex-col items-center py-4 mb-2">
                    <img src="/public/icons/people.png" />
                </div>
                <div class="flex flex-col gap-y-2">
                    <div
                        class="border-l-[4px] border-green-500 w-full h-[65px]"
                        v-for="avatar in avatars"
                    >
                        <img class="w-full h-[100%]" :src="avatar" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
