
// Bootstrap hover for drop down menu

var mq = window.matchMedia( "(min-width: 992px)" );
if (mq.matches) {
    $('.dropdown').hover(
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
        },
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
        }
    );

    $('.dropdown-menu').hover(
        function () {
            $(this).stop(true, true);
        },
        function () {
            $(this).stop(true, true).delay(100).fadeOut();
        }
    );
}

// Aos animation

AOS.init({
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    offset: 120, // offset (in px) from the original trigger point
    delay: 150, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
});



// top bar fixed on scroll up

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
// height of nav bar
var delta = 60;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;



    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
        }
        if( navbarHeight > st){
            $('.header').removeClass('nav-down');
        }

    }


    lastScrollTop = st;
}


//  Hamburger animation

$('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
    $('body').toggleClass('body-hidden-overflow');
});



//  Swiper slider

'use strict';

$(function () {

    var homeSliderDesign = new Swiper('.home-slider-design', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        speed: 1500,
        parallax: true,
        autoplay: {
            delay: 5000,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '#homeNext',
            prevEl: '#homePrev',
        },
    });


});

// Parallax effect

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    overflow: true
});
var image = document.getElementsByClassName('thumbnail-left');
new simpleParallax(image, {
    orientation: 'left'
});
var image = document.getElementsByClassName('thumbnail-right');
new simpleParallax(image, {
    orientation: 'right'
});
var video = document.getElementsByTagName('video');
new simpleParallax(video, {
    overflow: true
});
