/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
// Smooth Scroll Logic //
$("[data-scroll='true']").click(function () {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
}); // One Col Slider Logic

$('.one-col-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  cssEase: 'linear'
}); // Two Col Slider Logic

$('.two-col-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  swipeToSlide: true,
  infinite: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }]
}); // Three Col Slider Logic

$('.three-col-slider').slick({
  dots: false,
  arrows: false,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      dots: true
    }
  }]
}); // Four Col Slider Logic

$('.four-col-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
}); //   function mobileOnlySlider() {

$('.icon-text-repeater').slick({
  dots: false,
  arrows: false,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      dots: true,
      arrows: true
    }
  }]
}); // Five Col Slider Logic

$('.five-col-slider').slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      arrows: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2
    }
  }]
}); // Six Col Slider Logic

$('.six-col-slider').slick({
  dots: true,
  arrows: false,
  infinite: false,
  autoplay: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2
    }
  }]
}); // Year Slider

$('.year-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 5,
  speed: 800,
  focusOnSelect: true,
  asNavFor: '.year-data-slider',
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      arrows: false
    }
  }]
});
$('.year-data-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  asNavFor: '.year-slider'
});
$('.tab-link').click(function () {
  var tabID = $(this).attr('data-tab');
  $(this).addClass('active').siblings().removeClass('active');
  $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
});
/* Tab to Accordion Logic */

$(".tab-link").click(function () {
  var index = $(this).index();
  var parent = $(this).parents(".tab-to-accordion");
  var previousActive = parent.find(".main-tab-content").find(".active");
  var currentActive = parent.find(".main-tab-content").find(".tab").eq(index);
  previousActive.fadeOut(300, function () {
    previousActive.removeClass("active");
    currentActive.fadeIn(300, function () {
      currentActive.addClass("active");
    });
  });
});
$(".accordion-btn").click(function () {
  var prevActive = $(".main-tab-content").find(".active");
  var currentActive = $(this).next();
  var isActive = $(this).hasClass('.is-opened');

  if (isActive) {
    return;
  } else {
    $(this).siblings().removeClass('is-opened');
    $(this).addClass("is-opened");
  }

  prevActive.slideUp(300, function () {
    prevActive.removeClass("active");
  });
  currentActive.slideDown(300, function () {
    currentActive.addClass("active");
  });
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
}); //study-program card slider

function mobileOnlySlider() {
  $('.study-card').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 5000
  });
  $('.study-card').slick('slickRemove', -1);
}

if (window.innerWidth < 768) {
  mobileOnlySlider();
}

$(window).resize(function (e) {
  if (window.innerWidth < 768) {
    if (!$('.study-card').hasClass('slick-initialized')) {
      mobileOnlySlider();
    }
  } else {
    if ($('.study-card').hasClass('slick-initialized')) {
      $('.study-card').slick('unslick');
    }
  }
}); // quotation-slider

$('.quotation-slider').slick({
  dots: false,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false
    }
  }]
}); // Counter Slider

$('.counter-slider').slick({
  dots: false,
  arrows: false,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      dots: true,
      arrows: true
    }
  }]
});
$("[data-toggle='modal']").click(function () {
  var TargetModalId = '#' + $(this).data("target");
  $(TargetModalId).fadeIn();
});
$("[data-close]").click(function () {
  $(this).parents(".modal").fadeOut();
});
$('.studyformat-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  swipeToSlide: true,
  infinite: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
$('.study-subpage-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  swipeToSlide: true,
  infinite: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
$('.content-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.secondary-img-slider, .background-header-slider'
});
$('.background-header-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.content-slider'
});
$('.secondary-img-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.content-slider'
}); // Filter for blog

$("[name='blog-select-filter']").change(function (e) {
  var group_url = $(this).attr("data-base-url");

  if (group_url = e.target.value) {
    window.location.href = group_url;
  } else {
    window.location.href = e.target.value;
  }
}); // Hero subpages L Desk

$(document).ready(function () {
  var stickyTop = $('.sticky').offset().top;
  $(window).scroll(function () {
    var windowTop = $(window).scrollTop() - $(".hero-subpage-l").height() + 100;

    if (stickyTop < windowTop) {
      $('.sticky').css('display', 'flex');
      $('.sticky').css('position', 'fixed');
      $('.sticky').fadeIn('1000');
    } else {
      $('.sticky').css('display', 'none');
      $('.sticky').css('position', 'relative');
      $('.sticky').fadeOut('1000');
    }
  });
});
$('.filter-btn').click(function () {
  $(".filter-list").fadeToggle();
  $(this).find('svg').toggleClass('arrow-down');
});
$('.filter-list a').click(function () {
  $(".filter-list").fadeToggle(300);
  $(this).find('svg').toggleClass('arrow-down');
}); // Hero home carousel dropdown

$("#stream-dropdown").click(function () {
  $(".stream-dropdown-menu").slideToggle();
  $(".interested-dropdown-menu").slideUp();
});
$("#interested-dropdown").click(function () {
  $(".interested-dropdown-menu").slideToggle();
  $(".stream-dropdown-menu").slideUp();
});
$(".stream-dropdown-link").click(function () {
  $(".stream-selection-notice").addClass("hidden");
  var groupIndex = $(this).data("stream-group");
  var label = $(this).text();
  $("#stream-dropdown").text(label);
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(".interested-dropdown-link").addClass("hidden");
  $(".interested-dropdown-menu").find("[data-interested-group='" + groupIndex + "']").removeClass("hidden");
  $(".stream-dropdown-menu").slideToggle();
  $("#interested-dropdown").text($("#interested-dropdown").attr("interested-placeholder"));
});
$(".interested-dropdown-link").click(function () {
  $(".interested-dropdown-menu").slideToggle();
  var label = $(this).text();
  $("#interested-dropdown").text(label);
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  var redirectUrl = $(this).data("redirect-url");
  $("#interested-course-button").attr("href", redirectUrl);
}); //Sliding Text

function Marquee(selector, speed) {
  var parentSelector = document.querySelector(selector);
  var clone = parentSelector.innerHTML;
  var firstElement = parentSelector.children[0];
  var i = 0;
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  setInterval(function () {
    firstElement.style.marginLeft = "-".concat(i, "px");

    if (i > firstElement.clientWidth) {
      i = 0;
    }

    i = i + speed;
  }, 0);
}

window.addEventListener('load', Marquee('.marquee', .4));
/******/ })()
;