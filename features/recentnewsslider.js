var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // "@0.00": {
      //   slidesPerView: 1,
      //   spaceBetween: 10,
      // },
      "@01.5": {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      "@1.8": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@3.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });