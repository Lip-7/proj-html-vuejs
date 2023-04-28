<template>
    <div class="wrap row w-100">
        <div class="col-12 col-lg-6 leftSide d-flex justify-content-center overflow-hidden">
            <div class="events">
                <h6 class="tRed spaced">Made with love</h6>
                <h2 class="h1">Delish Pizza Deals</h2>
                <div class="singleDate d-flex gap-5 py-4 borded">
                    <div class="date d-flex flex-column align-items-center">
                        <h2 class="tRed display-4 fw-bolder mb-0">02</h2>
                        <h2>nov</h2>
                    </div>
                    <div class="dateInfo w-75">
                        <h2>TRADITIONAL NEAPOLITAN PIES IN KYOTO PIZZA MERCATO</h2>
                        <div class="d-flex tLiRed text-capitalize align-items-center gap-2 dateInfoAddress">
                            <i class="fa-solid fa-location-dot"></i>
                            <p class="mb-0 small sans"><a class="tLiRed" href="#">204 E. Pizzetta Tommaso</a></p>
                        </div>
                    </div>
                </div>
                <div class="singleDate d-flex gap-5 py-4 borded">
                    <div class="date d-flex flex-column align-items-center">
                        <h2 class="tRed display-4 fw-bolder mb-0">03</h2>
                        <h2>nov</h2>
                    </div>
                    <div class="dateInfo w-75">
                        <h2>TERARAZZA PATIO DINING SPACE OPENING THIS WEEKEND</h2>
                        <div class="d-flex tLiRed text-capitalize align-items-center gap-2 dateInfoAddress">
                            <i class="fa-solid fa-location-dot"></i>
                            <p class="mb-0 small sans"><a class="tLiRed" href="#">204 E. Pizzetta Tommaso</a></p>
                        </div>
                    </div>
                </div>
                <div class="singleDate d-flex gap-5 py-4 pb-5">
                    <div class="date d-flex flex-column align-items-center">
                        <h2 class="tRed display-4 fw-bolder mb-0">05</h2>
                        <h2>nov</h2>
                    </div>
                    <div class="dateInfo w-75">
                        <h2>SIENNA PRIVATE DINING ROOM WITH STÉPHANE BRUNN</h2>
                        <div class="d-flex tLiRed text-capitalize align-items-center gap-2 dateInfoAddress">
                            <i class="fa-solid fa-location-dot"></i>
                            <p class="mb-0 small sans"><a class="tLiRed" href="#">204 E. Pizzetta Tommaso</a></p>
                        </div>
                    </div>
                </div>
                <p></p>
            </div>
        </div>
        <div class="col-12 col-lg-6 rightSide p-0 overflow-hidden">
            <img class="w-100" src="/img/h3-img-5a.jpg" alt="">
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Events',
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
    .leftSide {
        background-image: url('/img/cielo2.jpg');

        .events {
            padding-top: 100px;
            text-transform: uppercase;
            color: white;

            .tRed {
                color: $textBordeaux;
            }

            .tLiRed {
                color: $textRed;
            }

            .spaced {
                letter-spacing: 3px;
            }

            .sans {
                font-family: "Open sans", sans-serif;
            }

            .dateInfo {

                &:hover .dateInfoAddress i {
                    transform: translateY(-4px);
                }

                .dateInfoAddress i {
                    transition: all .5s;
                }
            }

            .borded {
                border-bottom: 2px dotted $bgGold;
            }
        }
    }

    .rightSide {
        max-height: 850px;
        object-fit: cover;
    }
}</style>