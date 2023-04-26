import { reactive } from "vue";

export const store = reactive({
  header: {
    navbar: {
      mainLinks: {
        left: [
          {
            name: "Home",
            underlinks: [
              "Main Home",
              "Italian Resturant",
              "Pizzeria Home",
              "Pizza light",
              "Pizza dark",
              "Fast food home",
            ],
          },
          {
            name: "Pages",
            underlinks: [
              "Main Home",
              "Italian Resturant",
              "Pizzeria Home",
              "Pizza light",
              "Pizza dark",
              "Fast food home",
            ],
          },
          {
            name: "Menu",
            underlinks: [
              "Main Home",
              "Italian Resturant",
              "Pizzeria Home",
              "Pizza light",
              "Pizza dark",
              "Fast food home",
            ],
          },
        ],
        right: [
          {
            name: "Event",
            underlinks: [
              "Main Home",
              "Italian Resturant",
              "Pizzeria Home",
              "Pizza light",
              "Pizza dark",
              "Fast food home",
            ],
          },
          {
            name: "Blog",
            underlinks: [
              "Main Home",
              "Italian Resturant",
              "Pizzeria Home",
              "Pizza light",
              "Pizza dark",
              "Fast food home",
            ],
          },
          {
            name: "Landing",
            underlinks: [
              "Main Home",
              "Italian Resturant",
              "Pizzeria Home",
              "Pizza light",
              "Pizza dark",
              "Fast food home",
            ],
          },
        ],
      },
    },
    carusel: {
      activeOne: "Urban",
      assets: {
        Crust: {
          name: "Crust",
          backText: "/img/h3-rev-img-1.png",
          pizzaImg: "/img/h3-rev-img-2.png",
        },
        Taste: {
          name: "Taste",
          backText: "/img/h3-rev-img-3.png",
          pizzaImg: "/img/h3-rev-img-4.png",
        },
        Urban: {
          name: "Urban",
          backText: "/img/h3-rev-img-5.png",
          pizzaImg: "/img/h3-rev-img-6.png",
        },
      },
    },
  },
  main: {},
});
