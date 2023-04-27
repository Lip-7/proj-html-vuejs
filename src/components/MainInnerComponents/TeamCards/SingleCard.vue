<template>
    <div class="wrap col-12 col-sm-6 col-lg-3 p-0 position-relative">
        <div class="image w-100">
            <img :src="singleMember.img" alt="">
        </div>
        <div class="onHover">

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SingleCard.vue',
    data() {
        return {

        }
    },
    methods: {

    },
    props:['singleMember'],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
.wrap{
    .image{
        position: relative;
        padding-bottom: 100%;

        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>