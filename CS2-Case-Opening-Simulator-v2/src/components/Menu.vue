<script setup lang="ts">
import { ref, onMounted } from "vue";
import { MenuItem } from "@/utils/interfaces";

const menuActive = (index: number): void => {
    menuItems.value.map((item) => (item.active = false));
    menuItems.value[index].active = true;
    localStorage.setItem("menu", JSON.stringify(menuItems.value));
};

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
]);

onMounted(() => {
    const activeMenu = localStorage.getItem('menu')
    if(activeMenu) menuItems.value = JSON.parse(activeMenu)
});

</script>

<template>
    <div class="menu absolute left-0 right-0 pt-4">
        <div class="container mx-auto px-2">
            <div class="menu-content flex items-center justify-between">
                <div class="menu-logo w-10 h-10">
                    <img class="rounded-xl" src="/images/logo.jpg" />
                </div>
                <div class="menu-nav">
                    <ul
                        class="menu flex items-center gap-x-6 text-[#F1FAEE] text-2xl font-poetsenone"
                    >
                        <li
                            class="transition-all duration-300"
                            :class="
                                menuItem.active
                                    ? 'text-[#A8DADC]'
                                    : 'hover:text-white'
                            "
                            v-for="(menuItem, menuIndex) in menuItems"
                            :key="menuItem.id"
                            @click="menuActive(menuIndex)"
                        >
                            <RouterLink :to="menuItem.path">{{
                                menuItem.name
                            }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
