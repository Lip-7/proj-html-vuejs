<template>
    <div class="wrap my-3">
        <div class="container">
            <div class="row d-flex flex-nowrap overflow-hidden align-items-center">
                <div class="col-12 col-sm-6 col-lg-3" v-for="company in store.main.clients">
                    <SingleClient :client="company"/>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { store } from '../../../store/store';
import SingleClient from './SingleClient.vue';
export default {
    name: 'Client',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    props:[],
    components: {
        SingleClient,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;
.wrap{
    background-color: $bgVeryLightGrey;
    .container{
        padding: 80px 150px;
        .row{

        }
    }
}
</style>