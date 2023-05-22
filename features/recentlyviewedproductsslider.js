var swiper = new Swiper("#mySwiper", {
    spaceBetween: 10,
    observer: true,
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
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
    navigation: {
      nextEl: ".rounded-arrow-product",
      prevEl: ".mirror",
    },
  });