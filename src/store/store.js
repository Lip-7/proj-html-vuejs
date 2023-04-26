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
  },
  main: {},
});
