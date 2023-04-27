<template>
    <main>
        <GalleryInfo/>
        <CaruselPosts/>
        <OffertsComponent/>
        <ParallaxBanner/>
        <TeamCards/>
        <Client/>
        <Events/>
        <Prenotations/>
    </main>
</template>
  
<script>
import CaruselPosts from './MainInnerComponents/JourneyPosts/CaruselPosts.vue';
import GalleryInfo from './MainInnerComponents/GalleryInfoimages/GalleryInfo.vue';
import OffertsComponent from './MainInnerComponents/Offerts/OffertsComponent.vue'
import ParallaxBanner from './MainInnerComponents/ParallaxBanner/ParallaxBanner.vue';
import TeamCards from './MainInnerComponents/TeamCards/TeamCards.vue';
import Client from './MainInnerComponents/Clients/Client.vue';
import Events from './MainInnerComponents/Events/Events.vue';
import Prenotations from './MainInnerComponents/Prenotations/Prenotations.vue';
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
        Events,
        Prenotations,
        Client,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>