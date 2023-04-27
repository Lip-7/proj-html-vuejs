<template>
    <div class="wrapper w-100 my-1">
        <form action="prenotation" class="d-flex container innerWrap align-items-center justify-content-center"
            @submit.prevent>
            <div class="persons position-relative">
                <i class="fa-solid fa-user-group"></i>
                <input type="number" placeholder="1 Person" class="w-100 h-100 px-4 pe-5">
            </div>
            <h5 class="mx-3 text-uppercase text-white">For</h5>
            <div class="persons position-relative">
                <i class="fa-solid fa-calendar"></i>
                <input type="date" placeholder="1 Person" class="w-100 h-100 px-4 pe-5">
            </div>
            <h5 class="mx-3 text-uppercase text-white">At</h5>
            <div class="persons position-relative">
                <i class="fa-solid fa-clock"></i>
                <input type="time" placeholder="09:45" class="w-100 h-100 px-4 pe-5">
            </div>
            <input type="submit" value="BOOK A TABLE">
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'Prenotations',
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

.wrapper {
    background-image: url('/img/h3-background-img-3.jpg');
    padding: 6rem 0;

    .innerWrap {
        .persons {
            width: 20%;
            height: 60px;

            i {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 15px;
                color: $textGold;
            }
        }

        input {
            font-family: 'Open sans', sans-serif;
            border: 2px solid black;
        }

        input::-webkit-calendar-picker-indicator {
            display: none;
        }

        input[type="submit"] {
            margin-left: 3rem;
            padding: 17px 50px;
            border: 0px;
            background-color: $bgSalmon;
            color: white;
            font-family: 'Oswald', sans-serif;
            font-size: .8rem;
            letter-spacing: 2px;
            font-weight: 500;
            transition: all .5s;
            &:hover{
                box-shadow: 0px 0px 8px black;
            }

        }
    }
}
</style>