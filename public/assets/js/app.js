/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/* Smooth Scroll Logic */
$("[data-scroll='true']").click(function () {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
/* One Col Slick Slider Logic */

$('.one-col-slider').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000
});
/*  FAQ Logic */

$(".accordion-question").click(function () {
  var isActive = $(this).parent().hasClass("is-active");

  if (isActive) {
    return;
  } else {
    $(this).parent().siblings().removeClass("is-active");
    $(this).parent().addClass("is-active");
    $(this).parent().siblings().find(".accordion-answer").slideUp();
    $(this).next().slideDown();
  }
});
/******/ })()
;