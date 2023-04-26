<template>
    <header>
        <div class="container main-nav py-3">
            <div class="topHeader d-flex justify-content-between align-items-center">
                <div class="call">
                    <span>Order Online</span>
                </div>
                <div class="navbar d-flex justify-content-between gap-5">
                    <div class="leftBar">
                        <ul class=" d-flex gap-5">
                            <li v-for="linkz in store.header.navbar.mainLinks.left"> <NavbarLink :linkSheets="linkz"/> </li>
                        </ul>
                    </div>
                    <div class="LogoBar">
                        <div class="logowrap">
                            <img src="/img/h5-logo-divided-header.png" alt="">
                        </div>
                    </div>
                    <div class="RightBar">
                        <ul class=" d-flex gap-5">
                            <li v-for="linkz in store.header.navbar.mainLinks.right"> <NavbarLink :linkSheets="linkz"/> </li>
                        </ul>
                    </div>
                </div>
                <div class="userTab">
                    <ul class="d-flex align-items-center gap-3">
                        <li class="d-flex align-items-center gap-1">
                            <img src="/svg/scooter.svg" alt="scooter">
                            <span>Cart</span>
                        </li>
                        <li class="d-flex align-items-center gap-1">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span>Search</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <HeaderCaruselComponent/>
    </header>
</template>
  
<script>
import { store } from '../store/store.js'
import HeaderCaruselComponent from './FooterInnerComponents/HeaderCaruselComponent.vue';
import NavbarLink from './FooterInnerComponents/NavbarLink.vue';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        NavbarLink,
        HeaderCaruselComponent,
    },
    mounted() {
    }
}
</script>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header{
    background-image: url(./img/cielo2.jpg);
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: .2em;
    .topHeader{
        .call{
            span{
                padding: 10px 30px;
                background-color: $bgSalmon;
            }
            cursor: pointer;
        }
        .logowrap{
            height: 114px;
            img{
                height: 100%;
            }
        }
        .userTab{
            li{
                img{
                    filter: invert(100);
                }
            }
        }
    }
}
</style>