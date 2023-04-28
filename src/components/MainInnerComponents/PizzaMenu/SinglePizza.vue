<template>
    <div class="wrap text-center">
        <div class="imgWrap">
            <img class=" w-100" :src="pizza.img" :alt="pizza.name">
        </div>
        <h5 class="pizzaName mt-3">{{ pizza.name }}</h5>
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
    props:['pizza'],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;
.wrap{
    .imgWrap{
        width: 200px;
        height: 200px;
        cursor: pointer;
    }
    h5{
        text-transform: uppercase;
        font-size: 18px;
    }
    h5.pizzaName{
        color: $textGold;
    }
    h5.pizzaPrice{
        color: $textRed;
    }
}
</style>