var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.7": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    "@2.2": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
