<template>
  <div class="wrap py-5 text-center">
    <div class="title">
        <span class="subtitle">Choose YOUR FLAVOR</span>
        <h2>the best pizza menu in town</h2>
        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interdum et malesuada fames ac.</p>
    </div>
  </div>
</template>
  
<script>
export default {
    name: 'PizzaMenu',
    data() {
        return {

        }
    },
    methods: {

    },
    props:[],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;
.wrap{
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
}
</style>