import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.portfolio-slider', {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    enabled: true,
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
});
