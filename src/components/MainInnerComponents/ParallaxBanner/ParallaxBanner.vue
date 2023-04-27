<template>
    <div class="wrap">
        <div class="parallaxImg"></div>
        <!-- <h2>GO AHEAD AND
            BUILD YOUR
            OWN PIZZA
            WE WON’T
            JUDGE!</h2> -->
    </div>
</template>
  
<script>
export default {
    name: 'ParallaxBanner',
    data() {
        return {

        }
    },
    methods: {

    },
    props: [],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
.wrap {
    height: 500px;
    width: 100%;
    overflow: hidden;
    position: relative;

    .parallaxImg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/img/h3-background-img.jpg');
        background-attachment: fixed;
    }
}
</style>