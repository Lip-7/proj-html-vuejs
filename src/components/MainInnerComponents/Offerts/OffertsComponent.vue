<template>
    <div class="wrap d-flex row w-100">
        <div class="image col-12 col-lg-6 position-relative">
            <img class="over" src="/img/h1-img-7n.png" alt="Don Peppe Pizza Specials">
            <img class="back" src="/img/h1-img-4.jpg" alt="Don Peppe Clients">
        </div>
        <div class="offerts col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div class="specials">
                <h2>Specials<span>*</span></h2>
                <p class="subtext">Magnt a pizza bona, solo da noi puoi trovare queste speciali offerte.</p>
                <div class="singleOffert d-flex mt-4">
                    <h4 class="price me-3">$10</h4>
                    <div class="offerDetails">
                        <h4>Combo piccolo</h4>
                        <p>Panino con friarielli, 2 tranci di margherita e 1 cocacola alla spina da 50 cl</p>
                    </div>
                </div>
                <div class="singleOffert d-flex">
                    <h4 class="price me-3">$20</h4>
                    <div class="offerDetails">
                        <h4>Combo medio</h4>
                        <p>Due panini con friarielli, 4 tranci di margherita e 1 cocacola alla spina da 1 litro</p>
                    </div>
                </div>
                <div class="singleOffert d-flex">
                    <h4 class="price me-3">$30</h4>
                    <div class="offerDetails">
                        <h4>Combo grande</h4>
                        <p>Con 30 eur ti do tutt o negozio, firma qua per procedere col passaggio di proprietà</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'OffertsComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    props:[],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;
.wrap{
    .image{
        img.back{
            width: 100%;
        }
        img.over{
            position: absolute;
            width: 50%;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
        }
    }
    .offerts{
        .specials{
            h2{
                font-size: 2.8rem;
                text-transform: uppercase;
            }
            p{
                font-family: 'Open sans', sans-serif;
            }
            .subtext{
                font-size: 1.2rem;
            }
            width: 45%;
            .singleOffert{
                h4{
                    text-transform: uppercase;
                }
                .price{
                    color: $textBordeaux;
                }
            }
        }
    }
}
</style>