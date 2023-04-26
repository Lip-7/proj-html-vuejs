<template>
    <div class="wrap w-100 position-relative">
        <div class="backText">
            <img :src="activeOne.backText" alt="Peppe's Pizzas">
        </div>
        <div class="pizzaImg">
            <img :src="activeOne.pizzaImg" alt="Peppe's Pizzas">
        </div>
        <div class="prevButton position-relative">
            <span>Prev</span>
        </div>
        <div class="nextButton position-absolute">
            <span>Next</span>
        </div>
    </div>
</template>
  
<script>
import {store} from '../../store/store'
export default {
    name: 'HeaderCaruselComponent',
    data() {
        return {
            store,
            toView: "Urban",
        }
    },
    methods: {

    },
    components: {

    },
    computed: {
        activeOne() {
            return store.header.carusel.assets[this.toView]
        }
    },
    mounted() {
    }
}
</script>
  
<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
.wrap{
    height: 500px;
    .backText , .pizzaImg {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .backText{
        animation: fadein .6s linear;
        img{
            animation: growup .3s linear;
        }
    }
    .pizzaImg{
        animation: fadein .6s linear .3s;
        animation-fill-mode: forwards;
        opacity: 0;
        img{
            animation: fromTop .3s linear .3s;
        }
    }
    .prevButton , .nextButton{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white;
        color: $textRed;
        top: 30%;
        cursor: pointer;
        span {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .prevButton{
        left: -65px;
        rotate: 90deg;
    }
    .nextButton{
        right: -65px;
        rotate: -90deg;

    }

    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes growup {
        from{
            scale: .7;
        }
        to{
            scale: 1;
        }
    }
    @keyframes fromTop {
        from{
            transform: translateY(-10%);
        }
        to{
            transform: translateY(0);
        }
    }
}
</style>