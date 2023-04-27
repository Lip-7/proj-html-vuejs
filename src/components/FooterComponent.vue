<template>
    <footer>
        <div class="wrapper d-flex w-100">
            <div class="leftSide w-50 d-flex justify-content-center">
                <div class="locals">
                    
                </div>
            </div>
            <div class="rightSide w-50">
                <img src="/img/footer-img-1.jpg" alt="">
            </div>
        </div>
    </footer>
</template>
  
<script>
export default {
    name: 'FooterComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
.wrapper{
    height: 750px;
    overflow: hidden;
    .leftSide{
        background-image: url(/img/cielo2.jpg);
    }
}
</style>