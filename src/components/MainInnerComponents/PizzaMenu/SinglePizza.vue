<template>
    <div class="wrap text-center d-flex flex-column align-items-center">
        <div class="imgWrap overflow-visible py-5">
            <img draggable="false" class=" w-100" :src="pizza.img" :alt="pizza.name">
            <div class="back"></div>
        </div>
        <h5 class="pizzaName">{{ pizza.name }}</h5>
        <h5 class="pizzaPrice">{{ pizza.price }}</h5>

    </div>
</template>
  
<script>
export default {
    name: 'SinglePizza',
    data() {
        return {

        }
    },
    methods: {

    },
    props: ['pizza'],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;

.wrap {
    .imgWrap {
        width: 200px;
        height: 200px;
        cursor: pointer;
        position: relative;

        .back {
            position: absolute;
            top: -11px;
            left: -49px;
            width: 100%;
            height: 100%;
            background-image: url(/img/yum.png);
            background-size: cover;
            background-position: center;
            z-index: 1;
            transition: all .3s;
            opacity: 0;
            transform: scale(1);
            transform: rotate(-10deg);
        }
        img{
            z-index: 2;
            position: relative;
        }
        &:hover .back{
            opacity: 1;
            transform: scale(1.7);
            transform: rotate(0deg);
        }
    }

    h5 {
        text-transform: uppercase;
        font-size: 18px;
    }

    h5.pizzaName {
        color: $textGold;
        margin-top: 60px;
    }

    h5.pizzaPrice {
        color: $textRed;
    }
}</style>