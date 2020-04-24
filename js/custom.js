// Bootstrap hover for drop down menu

var mq = window.matchMedia("(min-width: 992px)");
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


/* fixed nav on scroll */

/* for large screen */

var mq = window.matchMedia("(min-width: 992px)");
if (mq.matches) {

    const body = document.body;
    const nav = document.querySelector(".header nav");
    const menu = document.querySelector(".header .menu");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset;
        if (currentScroll == 0) {
            body.classList.remove(scrollUp);
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
    });
}
/* for device */

var mq = window.matchMedia("(max-width: 992px)");
if (mq.matches) {

    const body = document.body;
    const triggerMenu = document.querySelector(".header .first-button");
    triggerMenu.addEventListener("click", function () {
        body.classList.toggle("menu-open");
    });
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


//  Hamburger animation

$('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
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

// masonry property



(function ($) {
    var $grid = $('.masonry-wrapper').masonry({
        itemSelector: '.item',
        columnWidth: '.item',
        percentPosition: true,
        transitionDuration: 300,
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });
}(jQuery));

//  magnific popup

// images


    $('.gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below

            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });


    // slick slider

$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        speed: 800,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        fade: false,
        autoplaySpeed: 6000,
        mobileFirst:true
    }).slickAnimation();
});





