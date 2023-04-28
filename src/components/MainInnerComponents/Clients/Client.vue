<template>
    <div class="wrap my-3">
        <div class="container">
            <div class="row d-flex flex-nowrap overflow-hidden align-items-center" @mousemove="dragging" @mousedown="() => this.isDragging = true" ref="clientsSlider">
                <div class="col-12 col-sm-6 col-lg-3" v-for="company in store.main.clients" ref="clientsList">
                    <SingleClient :client="company" ref="clientsItems"/>
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
            isDragging: false,
        }
    },
    methods: {
        dragging(e) {
            if (!this.isDragging) return;
            this.$refs.clientsSlider.scrollLeft -= e.movementX;
        },
        dragStop() {
            this.isDragging = false;
        },
    },
    props:[],
    components: {
        SingleClient,
    },
    mounted() {
        document.addEventListener('mouseup', this.dragStop)
        console.log(this.$refs.clientsItems);
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