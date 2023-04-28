<template>
    <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in store.main.pizzas">
        <SinglePizza :pizza="item" :key="index"/>
    </swiper-slide>
  </swiper>
    <!-- <div class="swiper-container">
        <div class="swiper-wrapper pb-5 pt-5 mt-5 d-flex overflow-hidden justify-content-between w-10">
            <SinglePizza v-for="(item, index) in store.main.pizzas" :pizza="item" :key="index" class="swiper-slide" />
        </div>
        <div class="swiper-pagination"></div>
    </div> -->
    <!-- <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/img/h3-product-img-3a-150x150.png" alt=""></div>
            <div class="swiper-slide"><img src="/img/h3-product-img-3a-150x150.png" alt=""></div>
            <div class="swiper-slide"><img src="/img/h3-product-img-3a-150x150.png" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
    </div> -->
</template>
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { store } from '../../../store/store';
import SinglePizza from './SinglePizza.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        SinglePizza,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
@import '/node_modules/swiper/swiper.scss'
</style>