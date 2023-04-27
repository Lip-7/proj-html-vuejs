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
  main: {
    galleryInfo: [
      {
        img: '/img/h3-img-1.jpg',
        title: 'Don Peppe Location'
      },
      {
        img: '/img/h3-img-2.jpg',
        title: 'Don Peppe Event'

      },
      {
        img: '/img/h3-img-3.jpg',
        title: 'Young Don Peppe'

      },
      {
        img: '/img/h3-img-4.jpg',
        title: 'Don Peppe Event'
      },
    ],
    teamCards: [
      {
        name: "Pascal o' spuorc",
        img: '/img/h1-team-1a-700x700.jpg',
        role: 'Head Chef',
        socials: {
          instagram: '#',
          twitter: '#',
          facebook: '#',
        }
      },
      {
        name: "Sharon Hayes",
        img: '/img/h1-team-2a.jpg',
        role: 'Executive Chef',
        socials: {
          instagram: '#',
          twitter: '#',
          facebook: '#',
        }
      },
      {
        name: "Nicola o' Puorc",
        img: '/img/h1-team-4a.jpg',
        role: 'Executive Chef',
        socials: {
          instagram: '#',
          twitter: '#',
          facebook: '#',
        }
      },
      {
        name: "Carol Simpson",
        img: '/img/h1-team-3a.jpg',
        role: 'Executive Chef',
        socials: {
          instagram: '#',
          twitter: '#',
          facebook: '#',
        }
      },
    ],
    clients: [
      {
        img: '/img/h1-clients-img-1.png',
        name: 'Big Cheese'
      },
      {
        img: '/img/h1-clients-img-2.png',
        name: 'Bludoos Bar'
      },
      {
        img: '/img/h1-clients-img-3.png',
        name: 'Vegan'
      },
      {
        img: '/img/h1-clients-img-4.png',
        name: 'Cowboy'
      },
      {
        img: '/img/h1-clients-img-5.png',
        name: 'Gordon Resturant'
      },
    ],
  },
  footer: {
    locals: [
      {
        address: '1614 E. Bell Rd #104',
        city: 'Salerno, AZ 85022',
        number: '(602) 867-1010'
      },
      {
        address: '204 E. Pizzetta Tommaso',
        city: 'Sorrento, AZ 85022',
        number: '(358) 867-1010'
      },
      {
        address: 'Vale Puglia 54',
        city: 'Torre Del Greco AZ 85022',
        number: '(359) 867-1010'
      },
      {
        address: 'Corso Itali AA',
        city: 'Naples, AZ 85022',
        number: '(989) 867-1010'
      }
    ],
  }
});

/* cose da fare quando avrò tempo:
carosello posts del main
carosello Clients
carosello pizze
impostare nell'header i cambi si pizza al click
fixare la parte degli eventi
aggiungere la scritta che scende nel ParallaxBanner

*/