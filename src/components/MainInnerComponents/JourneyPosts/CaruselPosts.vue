<template>
    <div class="wrap my-2">
        <div class="container d-flex justify-content-center">
            <div class="innerCont w-75 d-flex flex-nowrap overflow-auto">
                <div class="singlePost w-100 text-center position-relative">
                    <span class="apice d-block">“</span>
                    <p class="mt-3">“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza
                        slice in naples”</p>
                    <span class="text-uppercase">washington post 2018</span>
                    <div class="dots d-flex">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MainComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    props: [],
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;

.wrap {
    background-color: $bgVeryVeryLightGrey;

    .container {
        padding: 5rem;

        .innerCont {
            background-image: url(/img/h3-testimonials-bckgrnd.jpg);
            background-position: center;
            background-size: cover;

            .singlePost {
                height: 400px;

                .apice {
                    font-weight: 500;
                    color: $textGold;
                    font-size: 192px;
                    height: 135px;

                }

                p {
                    font-size: 25px;
                    font-weight: 500;
                    text-transform: uppercase;
                }

                span {
                    font-size: 12px;
                    letter-spacing: .2em;
                    font-weight: 500;
                    color: $textRed;
                }

                .dots {
                    
                }
            }
        }
    }
}
</style>