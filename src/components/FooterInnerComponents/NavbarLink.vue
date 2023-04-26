<template>
    <div class="d-flex align-items-center">
        <div v-if="linkSheets.name == 'Home'" class="logo me-2">
            <img src="/svg/mustache_bw.svg" alt="">
        </div>
        <a href="#">{{ linkSheets.name }}</a>
    </div>
</template>
  
<script>
export default {
    name: 'NavbarLink',
    data() {
        return {

        }
    },
    props: ['linkSheets',],
    methods: {

    },
    components: {

    },
    mounted() {
    }
}
</script>
  
<style lang="scss" scoped>
img{
    filter: invert(100);
}
.logo{
    width: 22px;
}
</style>