
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


/* fixed nav on scroll */

const body = document.body;
const triggerMenu = document.querySelector(".header .first-button");
const nav = document.querySelector(".header nav");
const menu = document.querySelector(".header .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

triggerMenu.addEventListener("click", () => {
    body.classList.toggle("menu-open");
});

window.addEventListener("scroll", () => {
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

