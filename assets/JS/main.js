$(document).ready(function () {
  $(".dropdown-toggle").dropdown();

  $("#landing-carousel").owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
  });

  $("#procedures-carousel").owlCarousel({
    rtl: true,
    items: 4,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      900: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });

  $("#news-carousel").owlCarousel({
    rtl: true,
    items: 3,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    center: true,
    navText: [
      "<img src='assets/images/SVG/news-arrow2.svg'>",
      "<img src='assets/images/SVG/news-arrow.svg'>",
    ],
    responsive: {
      0: {
        dots: true,
        
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        items: 1,
        nav: false,
        dots: true,
      },
      900: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });

  $("#ads-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 1,
  });
});
