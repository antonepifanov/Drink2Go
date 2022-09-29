import Swiper, {Navigation, Pagination} from "swiper";

(() => {
  const sliders = document.querySelectorAll(".promo__slider");

  if (!sliders) return;

  sliders.forEach((slider) => {
    new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      effect: "slide",
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: ".promo__slider-pagination",
        type: "bullets",
        clickable: true,
        bulletElement: "button",
      },
      a11y: {
        enabled: true,
        prevSlideMessage: "Предыдущий слайд",
        nextSlideMessage: "Следующий слайд",
      },
      on: {
        resize: function () {
          this.update();
        },
        orientationchange: function () {
          this.update();
        },
      },
    })
  });
})();
