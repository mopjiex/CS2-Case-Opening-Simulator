<script setup>
    import {ref} from 'vue';
    import {Swiper, SwiperSlide} from 'swiper/vue';
    import {cases} from '@/library/Cases';
    import {addRandomElement, shuffleArray} from  '@/library/functions';
    import 'swiper/css';
    const show = ref(false);
    const props = defineProps({
        caseIndex: Number,
        showSlider: Boolean,
    });

    const emit = defineEmits();

    const updateShowSlider = () => {
        emit('update:showSlider', false);
    }

    const caseSkins = cases[props.caseIndex].skins;

    const colors = {
        blue: [],
        purple: [],
        violet: [],
        red: [],
        yellow: [],
    };

  

    for(let i = 0; i < caseSkins.length; i++) {
        colors[caseSkins[i].color].push({src: caseSkins[i].src, 
                                    nameSkin: caseSkins[i].nameSkin,
                                    color:caseSkins[i].color, 
                                    background: caseSkins[i].background
                                });
    }



    let skins = [...addRandomElement(colors.blue, 30), ...addRandomElement(colors.purple, 10),
              ...addRandomElement(colors.violet, 5), ...addRandomElement(colors.red, 2), 
              ...addRandomElement(colors.yellow, 1)
    ];


    skins = shuffleArray(skins);

    let interval = ref(100);
    let currentSwiper = ref(null);
    const onSwiper = swiper => currentSwiper.value = swiper;
    const a = ref(0);

    const onSlideChange = () => {
        a.value = currentSwiper.value.activeIndex;
    }

    const changeSkins = () => {
    const audio = new Audio();
    audio.src = '/sound/sound.mp3';
    audio.play();
    let i = 0;

    const recursiveTimeout = () => {
        if(i <= 40) {
            currentSwiper.value.slideNext();
            let delay = interval.value;
            // if(i >= 10) delay = 300;
            // if(i >= 18) delay = 400;
            // if(i >= 23) delay = 500;
            // if(i >= 25) delay = 700;
            i++;
            setTimeout(recursiveTimeout, delay);
        }
    }
  
    recursiveTimeout();
}

  setTimeout(changeSkins, 100);
  setTimeout(() => show.value = true, 7000)

</script>

<template>
     <div class="modal" v-if="show">
        <div class="container">
            <div class="modal__content">
                <h2 class="modal__title">
                   {{ skins[a + 2].nameSkin }}
                </h2>

                <div class="modal__color"
                     :style="{backgroundColor: skins[a+2].color}"
                >

                </div>

                <p class="modal__case">
                    {{cases[caseIndex].nameCase }}
                </p>

                <div class="modal__box-img"
                     :style="{background: skins[a+2].background}"
                >
                    <img :src="`/cases/${cases[caseIndex].src}/${skins[a + 2].src}.png`">
                </div>
                
            </div>
        </div>
    </div>
    <div class="app h-screen bg-[#347bcc]">
        <div class="container">
            <div class="wrapper">
                <swiper ref="swip" class="swiper"
                        :slides-per-view="5"
                        :space-between="50"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                >
                    <swiper-slide class="slide p-5" 
                        v-for="(skin, skinIdx) in skins"
                        :style="{background: skin.background, borderBottom: `6px solid ${skin.color}`}">
                            <img :src="`/cases/${cases[caseIndex].src}/${skin.src}.png`">
                    </swiper-slide>
                </swiper>
                <div class="band"></div>

            </div>
            
        </div>
    </div>
</template>

<style scoped>

.modal {
    padding-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #4e5054;
    z-index: 10;
}

.modal__title,
.modal__case {
    text-align: center
}

.modal__title {
    font-size: 32px;
    margin-bottom: 10px;
}

.modal__color {
    width: 350px;
    height: 4px;
    margin: 0 auto 10px auto;
}

.modal__case {
    font-size: 26px;
    margin-bottom: 60px;
}


.modal__box-img {
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.container {
  max-width: 1440px;
  padding: 0 10px;
  margin: 0 auto;
}



.wrapper {
    position: relative;
    padding-top: 100px;
    min-height: 100vh;
}

.swiper {
    margin-bottom: 25px;
}
.slide { 
  height: 200px;
  border: 1px solid #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.band {
  position: absolute;
  width: 3px;
  height: 21%;
  background-color: #aaaa39;
  top: 10.8%;
  left: 50%;
  z-index: 5;
}


</style>