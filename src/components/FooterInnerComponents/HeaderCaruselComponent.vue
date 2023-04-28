<template>
    <div class="wrap w-100 position-relative overflow-hidden">
        <div class="backText" ref="backWrap">
            <img :src="activeOne.backText" alt="Peppe's Pizzas" ref="backImg">
        </div>
        <div class="pizzaImg" ref="pizzaWrap">
            <img :src="activeOne.pizzaImg" alt="Peppe's Pizzas" ref="pizzaImg">
        </div>
        <div @click="changePizza('prev')" class="prevButton position-relative">
            <span>Prev</span>
        </div>
        <div @click="changePizza('next')" class="nextButton position-absolute">
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
            pizzasList: ['Urban', 'Taste', 'Crust'],
        }
    },
    methods: {
        changePizza(direction) {
            let actualIndex = this.pizzasList.indexOf(this.toView);
            let newToView;
            if (direction == 'next') {
                if (actualIndex < 2) {
                    newToView = this.pizzasList[actualIndex + 1];
                } else {
                    newToView = this.pizzasList[0];
                }
            } else {
                if (actualIndex == 0) {
                    newToView = this.pizzasList[2];
                } else {
                    newToView = this.pizzasList[actualIndex - 1];
                }
            }
            this.$refs.backWrap.removeAttribute('style')
            this.$refs.backImg.removeAttribute('style')
            this.$refs.pizzaWrap.removeAttribute('style')
            this.$refs.pizzaImg.removeAttribute('style')
            this.toView = newToView;
            setTimeout(() => {
                this.$refs.backWrap.style.animation = 'fadein .6s linear'
                this.$refs.backImg.style.animation = 'growup .3s linear'
                this.$refs.pizzaWrap.style.animation = 'fadein .6s linear .3s forwards'
                this.$refs.pizzaImg.style.animation = 'fromTop .3s linear .3s'
            }, 50);
        }
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