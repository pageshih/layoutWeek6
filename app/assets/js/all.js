import Swiper from '../../../node_modules/swiper/swiper-bundle';



var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 4.5,
});

$(function() {
  console.log('Hello Bootstrap5');
});