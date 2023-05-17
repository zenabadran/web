var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      765: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1130: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });