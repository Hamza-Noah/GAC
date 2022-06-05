let search = document.querySelector(".form-field");

search.addEventListener("focusin", function () {
  search.classList.add("active");
});

search.addEventListener("focusout", function () {
  search.classList.remove("active");
});

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
    // autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        // nav: true,
      },
      600: {
        items: 1,
        nav: true,
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
      "<img src='../images/title-arrow.svg'>",
      "<img src='../images/title-arrow2.svg'",
    ],
  });
});