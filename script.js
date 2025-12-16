const swiper = new Swiper(".swiper", {
  slidesPerView: "auto", // ширина слайда берётся из его классов/стилей
  spaceBetween: 64,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
