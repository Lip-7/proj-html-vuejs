<template>
    <main>
        <GalleryInfo/>
        <CaruselPosts/>
        <OffertsComponent/>
        <ParallaxBanner/>
    </main>
</template>
  
<script>
import CaruselPosts from './MainInnerComponents/JourneyPosts/CaruselPosts.vue';
import GalleryInfo from './MainInnerComponents/GalleryInfoimages/GalleryInfo.vue';
import OffertsComponent from './MainInnerComponents/Offerts/OffertsComponent.vue'
import ParallaxBanner from './MainInnerComponents/ParallaxBanner/ParallaxBanner.vue';
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
        ParallaxBanner,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>