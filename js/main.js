$(function() {

    $(".header__top-inner a").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.menu__btn, .menu a').on('click', function() {
        $('.header__top').toggleClass('header__top--active')
    })



    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.header__top-inner').addClass('header__top-inner--active');
        } else {
            $('.header__top-inner').removeClass('header__top-inner--active');
        }
    })




    var mixer = mixitup('.gallery__box');
    $('.blog__slider-inner').slick({
        arrows: false,
        dots: true,
    });
})