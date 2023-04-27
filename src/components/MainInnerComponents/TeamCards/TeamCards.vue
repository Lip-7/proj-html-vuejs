<template>
    <div class="row w-100">
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
.row{
    --bs-gutter-x: .05rem;
}
</style>