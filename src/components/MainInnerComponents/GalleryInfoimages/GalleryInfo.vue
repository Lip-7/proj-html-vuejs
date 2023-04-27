<template>
    <div class="wrapper row d-flex justify-content-between gx-2 my-2 w-100">
        <SingleImage v-for="imag in store.main.galleryInfo" :image="imag"/>
    </div>
</template>
  
<script>
import SingleImage from './SingleImage.vue';
import {store} from '../../../store/store'
export default {
    name: 'MainComponent',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    props:[],
    components: {
        SingleImage,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>

</style>