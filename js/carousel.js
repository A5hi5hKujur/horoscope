$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 80,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    300: {
      items: 1
    },
    400:{
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
