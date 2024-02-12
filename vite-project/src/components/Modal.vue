<script setup>
import {cases} from '@/library/Cases';

const props = defineProps({
    show: Boolean,
    index: Number,
})

const emit = defineEmits();

const closeModal = () => {
    emit('update:show', false);
}
</script>

<template>
   <div class="modal" v-if="show" >
    <div class="container mx-auto px-2.5 max-w-[1520px]">
        <div class="modal__content">
            <h1 class="modal__title">Открыть контейнер</h1>
            <img :src="`/cases/${cases[index].src}.png`" alt="" class="modal__img">
            <p class="modal__name">{{ cases[index].nameCase }}</p>
        </div>
    </div>
            <div class="modal__skins-content">
                <div class="blur"></div>
                <div class="container mx-auto px-2.5 max-w-[1520px]">
                    <h2 class="skins-content__title">
                        Внутри находится один из следующих скинов
                    </h2>
                    <div class="skins">
                        <div class="skin bg-gradient-to-b from-gray-500" 
                        v-for="skin in cases[index].skins"
                        :style="{borderBottom: `4px solid ${skin.color}`}">
                                <img 
                                :src="`/cases/revolution/${skin.src}.png`" 
                                class="skin__img"
                                >
                            <p class="skin__desc">
                                {{ skin.nameSkin }}
                            </p>
                        </div>
                    </div>
                    <div class="modal__btns">
                        <button class="modal__btn" @click="closeModal">Закрыть</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
</template>

<style scoped>


.modal {
    width: 100%;
    height: 100vh;
    background-color: #14171b;
    position: absolute;
    top: 0;
    left: 0;
    color: #cfd4d8;
    padding-top: 30px;
}


.modal__title,
.modal__name {
    text-align: center;
}

.modal__img {
    margin: 0 auto 15px auto;
}

.modal__title {
    font-size: 42px;
    margin-bottom: 15px;
}

.modal__name {
    font-size: 22px;
}

.skins-content__title {
    font-size: 18px;
    margin-bottom: 20px;
}

.modal__skins-content {
    padding: 20px 0;
    position: relative;
    min-height: 60vh;
}

.blur {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #323942;
    opacity: 0.4;
    z-index: 1;
}

.skins-content__title {
    margin-top: 20px;
}
.skins {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    height: 40vh;
    overflow: auto;
    z-index: 2;
    margin-bottom: 20px;
}

.skin {
    width: 130px;
    height: 130px;
    background-color: aliceblue;
    padding: 10px;
}

.skins::-webkit-scrollbar {
  width: 1px;
}
.skins::-webkit-scrollbar-track{
  background-color: transparent;
}

.skin__desc {
    margin-top: 40px;
}



.modal__btns {
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 5;
}

.modal__btn {
    font-weight: 700;
    color: #fff;
}
</style>