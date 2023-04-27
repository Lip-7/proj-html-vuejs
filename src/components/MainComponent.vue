<template>
    <main>
        <GalleryInfo/>
        <CaruselPosts/>
        <OffertsComponent/>
    </main>
</template>
  
<script>
import CaruselPosts from './MainInnerComponents/JourneyPosts/CaruselPosts.vue';
import GalleryInfo from './MainInnerComponents/GalleryInfoimages/GalleryInfo.vue';
import OffertsComponent from './MainInnerComponents/Offerts/OffertsComponent.vue'
export default {
    name: 'MainComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        GalleryInfo,
        CaruselPosts,
        OffertsComponent,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>