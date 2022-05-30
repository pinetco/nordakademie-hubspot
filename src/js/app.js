/* Smooth Scroll Logic */
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
    autoplaySpeed: 5000,
});

// Three Col Slider Logic
$('.three-col-slider').slick({
    dots: true,
    arrows: false,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
// Five Col Slider Logic
$('.five-col-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
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
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

/*  FAQ Logic */
$(".accordion-question").click(function(){
    var isActive = $(this).parent().hasClass("is-active");
    if(isActive){
        return;
    }else{
        $(this).parent().siblings().removeClass("is-active");
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().find(".accordion-answer").slideUp();
        $(this).next().slideDown();
    }
});
