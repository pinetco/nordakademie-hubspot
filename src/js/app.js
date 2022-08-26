// Smooth Scroll Logic //
$("[data-scroll='true']").click(function () {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
// One Col Slider Logic
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
// Two Col Slider Logic
$('.two-col-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            dots: true
        }
    }]
});
// Three Col Slider Logic
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
});
// icon and text repeater Slider Logic
//   function mobileOnlySlider() {
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
});
// Five Col Slider Logic

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
});
// Six Col Slider Logic

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
});
/* Tab Logic */

$('.tab-link').click(function () {
    var tabID = $(this).attr('data-tab');
    $(this).addClass('active').siblings().removeClass('active');
    $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
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
//study-program card slider

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
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            arrows: false
        }
    }]
}); // Three Col Slider Logic

$('.counter-slider').slick({
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
});
