<template>
    <div class="wrapper w-100 h-100 overflow-hidden position-relative">
        <div class="imgcenter fullimg w-100 h-100">
            <img draggable="false" class="img-fluid" :src="client.img" :alt="client.name"> 
            <!-- <a href="">
            </a> -->
        </div>
        <div draggable="false" class="imgover fullimg w-100 h-100">
            <img class="img-fluid" :src="client.img" :alt="client.name">
            <!-- <a href="">
            </a> -->
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SingleClient',
    data() {
        return {

        }
    },
    methods: {

    },
    props:['client'],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;
.wrapper{
    cursor: pointer;
    &:hover .fullimg{
        animation: goDown .5s;
    }
    .fullimg{
        a{

        }
        transition: all .5s;

    }
    .imgover{
        position: absolute;
        top: -200px;
    }
}
</style>