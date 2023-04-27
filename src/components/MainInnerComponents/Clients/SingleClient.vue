<template>
    <div class="wrapper w-100 h-100">
        <div class="imgUp fullimg w-100 h-100">
            <a href="#">
                <img class="img-fluid" :src="client.img" :alt="client.name">
            </a>
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
    .fullimg{
        a{

        }
    }
}
</style>