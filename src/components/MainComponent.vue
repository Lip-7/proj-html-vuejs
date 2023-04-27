<template>
    <main>
        <GalleryInfo/>
        <CaruselPosts/>
        <OffertsComponent/>
        <ParallaxBanner/>
        <TeamCards/>
    </main>
</template>
  
<script>
import CaruselPosts from './MainInnerComponents/JourneyPosts/CaruselPosts.vue';
import GalleryInfo from './MainInnerComponents/GalleryInfoimages/GalleryInfo.vue';
import OffertsComponent from './MainInnerComponents/Offerts/OffertsComponent.vue'
import ParallaxBanner from './MainInnerComponents/ParallaxBanner/ParallaxBanner.vue';
import TeamCards from './MainInnerComponents/TeamCards/TeamCards.vue';
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
        TeamCards,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>