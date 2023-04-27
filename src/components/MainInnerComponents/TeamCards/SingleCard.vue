<template>
    <div class="wrap col-12 col-sm-6 col-lg-3 p-0 position-relative">
        <div class="image w-100">
            <img :src="singleMember.img" alt="">
        </div>
        <div class="onHover">
            <div class="onhoverInnerWrap w-100 h-100 d-flex justify-content-center align-items-center">
                <div class="backg d-flex justify-content-center align-items-center">
                    <div class="info text-center">
                        <h3 class="text-uppercase mb-0 animTop">{{ singleMember.name }}</h3>
                        <div class="animTop2">
                            <span class="">{{ singleMember.role }}</span>
                        </div>
                        <div class="socials animTop3 my-2">
                            <a :href="singleMember.socials.instagram"><i class="fa-brands fa-instagram"></i></a>
                            <a :href="singleMember.socials.twitter"><i class="fa-brands fa-twitter mx-3"></i></a>
                            <a :href="singleMember.socials.facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SingleCard.vue',
    data() {
        return {

        }
    },
    methods: {

    },
    props: ['singleMember'],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;
.wrap {
    .image {
        position: relative;
        padding-bottom: 100%;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    &:hover .onHover{
        display: block;
        animation: fadein .5s,;
    }
    &:hover .animTop {
       animation: arriveFromBottom .5s;
    }
    &:hover .animTop2 {
       animation: arriveFromBottom .5s .2s, fadein .5s .2s;
    }
    &:hover .animTop3 {
       animation: arriveFromBottom .5s .4s, fadein .5s .4s;
    }

    .onHover {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        background-image: radial-gradient(black 1px, transparent 0);
        background-size: 40px 40px;
        background-position: -19px -19px;
        .backg{
            width: 80%;
            height: 80%;
            background-color: $bgSalmon;
            color: white;
            .info{
                span{
                    font-family: 'Open sans', sans-serif;
                }
            }
            .animTop2 , .animTop3{
                opacity: 0;
                animation-fill-mode: forwards;
            }
        }
    }
}
</style>

<!-- arriveFromBottom .5s -->