<template>
    <footer>
        <div class="wrapper d-flex w-100">
            <div class="leftSide w-50 d-flex justify-content-between position-relative">
                <div class="locals">
                    <h5>Find our restaurants</h5>
                    <LocationComponent v-for="line in store.footer.locals" :local="line"/>
                </div>
                <div class="timeTables">
                    <h5>Working hours</h5>
                    <div class="monday">
                        <h6 class=" mt-3 mb-0">Monday</h6>
                        <span class="lip_text-red">Kitchen Closed</span>
                    </div>
                    <div class="tuesdayUntilFriday my-3">
                        <h6>tuesday Until Friday</h6>
                        <span>9:00 - 22.00</span>
                    </div>
                    <div class="saturday my-3">
                        <h6>saturday<span class="lip_text-red">*</span></h6>
                        <span>Saturday 11am to midnight</span>
                    </div>
                    <div class="sunday my-3">
                        <h6>sunday</h6>
                        <span>9:00 - 22.00</span>
                    </div>

                    <div class="socials d-flex align-items-center gap-2">
                        <h6>Follow Us:</h6>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    
                </div>
                <div class="donPeppe w-25">
                    <h1 class="h3 text-uppercase text-white">THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.</h1>
                </div>
                <div class="copyright">
                    <p>© 2020 <span>Lip</span></p>
                </div>
                <div class="certificate">
                    <a href="#"><img src="../../public/img/footer-bottom-img.png" alt=""></a>
                </div>
            </div>
            <div class="rightSide w-50">
                <img src="/img/footer-img-1.jpg" alt="">
            </div>
        </div>
    </footer>
</template>
  
<script>
import {store} from '../store/store'
import LocationComponent from './FooterzInnerComponents/LocationComponent.vue';
export default {
    name: 'FooterComponent',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        LocationComponent,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.wrapper{
    height: 720px;
    overflow: hidden;
    color: $textVeryLightGrey;
    .leftSide{
        background-image: url(/img/cielo2.jpg);
        padding: 120px 60px;
        h5 , h6{
            color: $textGold;
            text-transform: uppercase;
            margin-bottom: 0;
        }
        .timeTables{
            .lip_text-red{
                color: $textRed;
            }
            span{
                font-family: 'Open sans', sans-serif;
            }
            .saturday{
                h6{
                    span{
                        position: relative;
                        top: -5px;
                        right: -5px;
                    }
                }
            }
            .socials{
                i{
                    color: $textWhite;
                    transition: all .5s;
                    &:hover{
                        color: $textDarkGold;
                    }
                }
            }
        }
        .copyright{
            color: $textGold;
            font-family: 'Open sans', sans-serif;
            font-size: .7rem;
            letter-spacing: 1px;
            position: absolute;
            bottom: 50px;
            left: 60px;
            span{
                color: $textGreen;
            }
        }
        .certificate{
            position: absolute;
            bottom: 50px;
            right: 60px;
        }
    }
}
</style>