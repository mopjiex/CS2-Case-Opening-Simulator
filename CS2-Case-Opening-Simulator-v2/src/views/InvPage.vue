<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div
        class="inventory min-h-screen bg pt-[60px]"
    >
           <div class="bg-gray-400 py-4 text-white">
                <ul class="flex items-center gap-x-6 uppercase text-xl justify-center">
                    <li>
                        <RouterLink to="/inventory">
                            Кейсы
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/skins">
                            Скины
                        </RouterLink>
                    </li>
                </ul>
           </div>

           <RouterView />
    </div>
</template>