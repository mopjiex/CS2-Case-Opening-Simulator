<script setup lang="ts">
import { ref, onMounted } from "vue";
import { MenuItem } from "@/utils/interfaces";

const menuItems = ref<MenuItem[]>([
    {
        id: 1,
        path: "/",
        name: "Home",
        active: true,
    },
    {
        id: 2,
        path: "/inventory",
        name: "Inventory",
        active: false,
    },
    {
        id: 3,
        path: "/skins",
        name: "Skins",
        active: false,
    },
    {
        id: 4,
        path: "/inventory",
        name: "Inventory",
        active: false,
    },
]);


</script>

<template>
    <div class="absolute left-0 right-0 menu text-white text-2xl font-kanit uppercase">
        <div class="container mx-auto px-2 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-x-4">
                    <button class="w-6 h-6">
                        <RouterLink :to="menuItems[0].path">
                            <img src="/icons/home.png" alt="" />
                        </RouterLink>
                    </button>
                    <button class="w-6 h-6">
                        <img src="/icons/settings.svg" alt="" />
                    </button>
                    <button class="w-6 h-6">
                        <img src="/icons/quit.png" alt="" />
                    </button>
                </div>

                <div class="">
                    <ul class="flex items-center gap-x-16">
                        <li class="hover:text-[#70D6FF]">
                            <RouterLink :to="menuItems[3].path">
                                {{ menuItems[3].name }}
                            </RouterLink>
                        </li>
                        <li>Play</li>
                        <li>News</li>
                    </ul>
                </div>
                <div class="">
                    <!-- Пустой див чтобы вверний див был по середине-->
                </div>
            </div>
        </div>
    </div>
</template>
