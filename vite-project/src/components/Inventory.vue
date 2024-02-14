<script setup>
import {ref} from 'vue';
import {cases} from '@/library/Cases';
import myModal from '@/components/Modal.vue'

const menuItems = ['Все', 'Экипировка', 'Графика', 'Контейнеры', 'Профиль', 
                   'Контакт обмена', 'Торговая площадка'];

const modalVisible = ref(false);
const indexCase = ref(0);


const modalOpen = (index) => {
    modalVisible.value = true;
    indexCase.value = index;
    itemCase(indexCase.value)
}

const itemCase = idx => {
    
}

</script>

<template>
    <myModal
        v-model:show="modalVisible"
        v-model:index="indexCase"

    />
     <section class="inventory bg-[#474a59] h-[93vh] pt-3">
            <div class="container mx-auto px-2.5 max-w-[1520px]">
                <div class="inventory__top mb-10">
                    <ul class="inventory__icons flex items-center gap-x-10 justify-center">
                        <li class="inventory__icon p-2.5 uppercase text-white text-lg 
                                   font-semibold cursor-pointer transition-all 
                                   duration-300 hover:bg-[#415e6e] hover:text-[#8ed4ed] hover:rounded-md">
                            <img class="inventory__icon-img w-8 h-8" src="/images/search.png">
                        </li>
                        <li class="inventory__icon-img p-2.5 uppercase text-white 
                                   text-lg font-semibold cursor-pointer transition-all 
                                   duration-300 hover:bg-[#415e6e] hover:text-[#8ed4ed] hover:rounded-md" 
                            v-for="item in menuItems">
                            {{ item }}
                        </li>
                       
                    </ul>
                </div>

                    <div class="inventory__cases h-[80vh] flex flex-wrap gap-x-10  gap-y-16 overflow-auto">
                    <div class="inventory__case w-44 h-44 bg-gradient-to-b 
                              from-gray-500 border-b-4 border-blue-300 
                                cursor-pointer transition-all duration-300 hover:shadow-xl" 
                         v-for="(caseItem, index) in cases"
                         @click="modalOpen(index)"
                         >
                        <img  :src="`/cases/${caseItem.src}.png`" 
                              class="inventory__case-img">
                        <p class="text text-white mt-10">
                          {{caseItem.nameCase}}
                        </p>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
.inventory__cases::-webkit-scrollbar {
  width: 1px;
}
.inventory__cases::-webkit-scrollbar-track{
  background-color: transparent;
}



</style>