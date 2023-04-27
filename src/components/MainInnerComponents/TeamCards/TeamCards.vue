<template>
    <div class="row">
        <SingleCard v-for="member in store.main.teamCards" :single-member="member"/>
    </div>
</template>
  
<script>
import {store} from '../../../store/store.js'
import SingleCard from './SingleCard.vue';
export default {
    name: 'TeamCards',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    props:[],
    components: {
        SingleCard,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>

</style>