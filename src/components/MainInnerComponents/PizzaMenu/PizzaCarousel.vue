<template>
    <swiper-container autoplay="true" autoplay-delay="2000" loop="true" reverse="true" slides-per-view="6" mousewheel-force-to-axis="true" class="mt-5">
        <swiper-slide v-for="(item, index) in store.main.pizzas">
            <SinglePizza :pizza="item" :key="index" class="swiper-slide" />
        </swiper-slide>
    </swiper-container>
</template>
  
<script>
import { register } from 'swiper/element/bundle';
/* import { Swiper, SwiperSlide } from 'swiper/vue'; */
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
    },
    mounted() {
        register();
    }
}
</script>
<style lang="scss" scoped>
/* @import '/node_modules/swiper/swiper.scss' */
</style>