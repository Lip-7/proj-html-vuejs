<template>
  <div class="wrap pt-5 text-center">
    <div class="title pt-5 pb-4">
        <span class="subtitle">Choose YOUR FLAVOR</span>
        <h2>the best pizza menu in town</h2>
        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interdum et malesuada fames ac.</p>
    </div>
    <PizzaCarousel/>
  </div>
</template>
  
<script>
import PizzaCarousel from './PizzaCarousel.vue';
import { store } from '../../../store/store';
import SinglePizza from './SinglePizza.vue';
export default {
    name: 'PizzaMenu',
    data() {
        return {
            store,
        }
    },
    methods: {
    },
    props:[],
    components: {
        SinglePizza,
        PizzaCarousel,
    },
    mounted() {
    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;
.wrap{
    padding-bottom: 120px;
    .title{
        span.subtitle{
            font-size: 12px;
            letter-spacing: .2em;
            font-weight: 500;
            text-transform: uppercase;
            color: $textRed;
            margin-bottom: 14px;
        }
        h2{
            font-weight: 500;
            text-transform: uppercase;
            font-size: 40px;
        }
        p.lorem{
            font-size: 18px;
            color: $textGrey;
            width: 600px;
            margin: 21px auto 0;
            font-weight: 400;
            font-family: 'Open sans', sans-serif;
        }
    }
    .pizzaCarusel{
        /* width: 110%;
        transform: translateX(-5%);
        cursor: pointer; */
        gap: 7rem;
    }
}
</style>