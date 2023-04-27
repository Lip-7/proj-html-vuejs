<template>
    <div class=" col-12 col-sm-6 col-xl-3 imgWrap position-relative">
        <img :src="image.img" :alt="image.title">
        <div @click="showpop()" class="onHover justify-content-center align-items-center">
            <div class="baloon">
                <img src="/svg/blackCircle.svg" alt="">
                <i class="fa-regular fa-eye"></i>
            </div>
        </div>
        <div class="bigImg" ref="popup" :class="{ 'd-none': !popToShow }">
            <img :src="image.img" :alt="image.title" class="popup-img">
            <div @click="showpop()" class="background"></div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MainComponent',
    data() {
        return {
            popToShow: false,
        }
    },
    methods: {
        showpop() {
            this.popToShow = !this.popToShow
        }
    },
    props: ['image'],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
.imgWrap {
    img {
        width: 100%;
        cursor: pointer;
    }

    &:hover .onHover {
        display: flex;
        animation: fadein .5s;
        cursor: pointer;
    }
}

.onHover {
    transition: all .5s;
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    background-image: radial-gradient(black 1px, transparent 0);
    background-size: 40px 40px;
    background-position: -19px -19px;
    filter: none;

    .baloon {
        width: 20%;
        position: relative;

        img {
            filter: invert(22%) sepia(55%) saturate(3874%) hue-rotate(359deg) brightness(104%) contrast(80%);
        }

        i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter:invert(100);
            font-size: 1.5rem;
        }
    }
}

.bigImg {
    .popup-img {
        position: fixed;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
    }
}</style>