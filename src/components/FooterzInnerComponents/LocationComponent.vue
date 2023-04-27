<template>
    <ul class="my-4">
        <li><a href="#">{{ local.address }}</a> </li>
        <li><a href="#">{{ local.city }}</a> </li>
        <li><a href="#">{{ local.number }}</a> </li>
    </ul>
</template>
  
<script>
export default {
    name: 'LocationComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    props:['local'],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
ul{
    font-family: 'Open sans', sans-serif;
    li{
        a{
            color: $textVeryLightGrey;
            transition: all .5s;
            &:hover{
                color: $textDarkGold;
            }
        }
    }
}
</style>