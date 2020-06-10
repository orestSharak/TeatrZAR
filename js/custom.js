(function($) {

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


    var body = document.body;
    var nav = document.querySelector(".header nav");
    var menu = document.querySelector(".header .menu");
    var scrollUp = "scroll-up";
    var scrollDown = "scroll-down";
    var lastScroll = 0;


    /* for large screen */

    var mql = window.matchMedia("(min-width: 992px)");
    if (mql.matches) {



        window.addEventListener("scroll", function () {
            var currentScroll = window.pageYOffset;
            if (currentScroll < 90) {
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

    var triggerMenu = document.querySelector(".header .first-button");
    triggerMenu.addEventListener("click", function () {
        body.classList.toggle("menu-open");
    });



    //Event to handle resizing

    var resizeTimer;

    $(window).resize(function ()
    {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(Resized, 100);
    });

    //Actual Resizing Event

    function Resized()
    {
        var mqd = window.matchMedia("(max-width: 992px)");

        var body = document.body;
        var nav = document.querySelector(".header nav");
        var menu = document.querySelector(".header .menu");
        var scrollUp = "scroll-up";
        var scrollDown = "scroll-down";
        var lastScroll = 0;


        if (mqd.matches) {

            window.addEventListener("scroll", function () {
                var currentScroll = window.pageYOffset;
                if (currentScroll) {
                    body.classList.remove(scrollDown);
                    return;
                }
            });



        }
        else{

            window.addEventListener("scroll", function () {
                var currentScroll = window.pageYOffset;
                if (currentScroll < 90) {
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


// swiper slider with swiper animation

    $(function () {

        var swiperAnimation = new SwiperAnimation();
        var mySwiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 5200,
                disableOnInteraction: false,
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


            on: {
                init: function () {
                    swiperAnimation.init(this).animate();
                },
                slideChange: function () {
                    swiperAnimation.init(this).animate();
                }
            }
        });


    });

// Parallax effect

    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        overflow: true
    });
    var imageLeft = document.getElementsByClassName('thumbnail-left');
    new simpleParallax(imageLeft, {
        orientation: 'left'
    });
    var imageRight = document.getElementsByClassName('thumbnail-right');
    new simpleParallax(imageRight, {
        orientation: 'right'
    });


// masonry property



    var $grid = $('.masonry-wrapper').masonry({
        itemSelector: '.item',
        columnWidth: '.item',
        percentPosition: true,
        transitionDuration: 300,
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });


//  magnific popup

// images


    $('.gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'article figure a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            },
            image: { // explanation title to the image
                titleSrc: function(item) {
                    return item.el.parents('article').find('h2').html() + item.el.parents('article').find('figcaption').html();
                }
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


// gluch btn trigger


    $('.gluch-btn').after().on('click', function () {
        $('.niewido-btn').toggleClass('hide');
        $('.gluch-block').toggleClass('show');
        $('.gluch-text').toggleClass('show');
    });


    // niewido btn trigger


    $('.niewido-btn').on('click', function () {
        $('.gluch-btn').toggleClass('hide');
        $('.niewido-block').toggleClass('show');
        $('.niewido-text').toggleClass('show');
    });



    /* reload window on width change

    (function () {

            var widthScreen = window.innerWidth;

            window.addEventListener('resize', function () {
                if (window.innerWidth !== widthScreen) {
                    setTimeout(function() {
                        window.location.reload(true);
                        console.log(widthScreen);
                    });
                }
            });
        }
    )();
*/


// AOS for IE

    function msieversion() {
        var ua = window.navigator.userAgent;
        var isIE = /MSIE|Trident|Edge\//.test(ua);

        if (isIE) {

            var sheet = document.createElement('style');
            sheet.innerHTML =
                "[data-aos^=fade][data-aos^=fade] {transform: translateZ(0) !important; opacity: 1 !important;}";
            document.body.appendChild(sheet);
        }
    }

    msieversion();


    // resize text trigger


    var isOpen = false;

    var trigger = document.querySelector('#resize');


    trigger.addEventListener('click', function(e) {
        var text = $('*');
        var fontSize = parseInt(text.eq(0).css("font-size"));


        e.preventDefault();
        console.log("resize");

        if(isOpen){
            text.css("font-size", fontSize - 3);
            isOpen = false;

        }
        else {
            text.css("font-size", fontSize + 3);
            isOpen = true;
        }

    }, false);


    // contrast text trigger




    var open = false;

    var contrast = document.querySelector('#contrast');

    contrast.addEventListener('click', function(e) {

        e.preventDefault();
        console.log("contrast");

        if(open){
            $('body *').removeClass('contrast');
            $('body,.header , footer').removeClass('dark-bg');
            $('.nav-link').removeClass('contrast');
            $('.footer-color').removeClass('dark-bg');
            $('.navbar-collapse').removeClass('dark-bg');
            $('.animated-icon1 span').removeClass('yellow-bg');
            $('.wave').removeClass('hide');
            $('.svg-blob').css('display', 'block');
            $('.dark-gradient').removeClass('dark-grad');

            open = false;
        }
        else {

            $('body *').addClass('contrast');
            $('body,.header , footer').addClass('dark-bg');
            $('.footer-color').addClass('dark-bg');
            $('.wave').addClass('hide');
            $('.svg-blob').css('display', 'none');
            $('.dark-gradient').addClass('dark-grad');
            $('.navbar-collapse').addClass('dark-bg');
            $('.animated-icon1 span').addClass('yellow-bg');

            open = true;
        }

    },false );




})(jQuery);





