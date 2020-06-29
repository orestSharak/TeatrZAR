/*!
*   Accessibility Buttons v3.1.2
*   http://tiagoporto.github.io/accessibility-buttons
*   Copyright (c) 2014-2017 Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

/**
 * accessibilityButtons
 * @param  {Array}  -
 * @return
 */

/* exported accessibilityButtons */
var accessibilityButtons = function accessibilityButtons(options) {
    'use strict';

    /**
     * hasClass
     * @param  {string}  element - DOM element
     * @param  {string}  clazz   - Class Name
     * @return {Boolean}
     */

    function hasClass(element, clazz) {
        return (' ' + element.className + ' ').indexOf(' ' + clazz + ' ') > -1;
    }

    var setting = {
        font: {
            nameButtonIncrease: '+A',
            ariaLabelButtonIncrease: 'Increase Font',
            nameButtonDecrease: '-A',
            ariaLabelButtonDecrease: 'Decrease Font'
        },

        contrast: {
            nameButtonAdd: 'Add Contrast',
            ariaLabelButtonAdd: 'Add Contrast',
            nameButtonRemove: 'Remove Contrast',
            ariaLabelButtonRemove: 'Remove Contrast'
        }
    };

    // Set buttons name and aria label
    if (options) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                var obj = options[key];

                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        setting[key][prop] = obj[prop];
                    }
                }
            }
        }
    }
    var text = $('*');
    var fontSize = parseInt(text.eq(0).css("font-size"));

    var $body = document.body,
        $fontButton = document.getElementById('accessibility-font'),
        $contrastButton = document.getElementById('accessibility-contrast'),
        $accessibilityButtons = document.getElementsByClassName('js-acessibility'),
        storageFont = localStorage.accessibility_font,
        storageContrast = localStorage.accessibility_contrast;

    // Check if exist storage and set the correct button names and aria attributes
    if (storageFont && $fontButton) {
        $body.classList.add('accessibility-font');
        text.css("font-size", fontSize + 3);

    } else if ($fontButton) {
        text.css("font-size", fontSize + 1 );

    }

    if (storageContrast && $contrastButton) {
        $body.classList.add('accessibility-contrast');

        $('body *').addClass('contrast');
        $('body,.header , footer').addClass('dark-bg');
        $('.footer-color').addClass('dark-bg');
        $('.wave').addClass('hide');
        $('.svg-blob').css('display', 'none');
        $('.dark-gradient').addClass('dark-grad');
        $('.navbar-collapse').addClass('dark-bg');
        $('.navbar-light .navbar-nav .show>.nav-link').addClass('contrast');
        $('.animated-icon1 span').addClass('yellow-bg');


    } else if ($contrastButton) {

        $('body *').removeClass('contrast');
        $('body,.header , footer').removeClass('dark-bg');
        $('.nav-link').removeClass('contrast');
        $('.footer-color').removeClass('dark-bg');
        $('.navbar-collapse').removeClass('dark-bg');
        $('.navbar-light .navbar-nav .show>.nav-link').removeClass('contrast');
        $('.animated-icon1 span').removeClass('yellow-bg');
        $('.wave').removeClass('hide');
        $('.svg-blob').css('display', 'block');
        $('.dark-gradient').removeClass('dark-grad');


    }

    /**
     * Get the click event
     * Rename the buttons
     * Apply/Remove Contrast or Font Size
     * Manage storage
     */



    function accessibility() {
        return function () {


            var $this = this;

            if (hasClass($body, $this.getAttribute('id'))) {
                $body.classList.remove($this.getAttribute('id'));

                if ($this.getAttribute('id') === 'accessibility-font') {

                    text.css("font-size", fontSize + 1 );

                    localStorage.removeItem('accessibility_font');

                } else {


                    jQuery('body *').removeClass('contrast');
                    jQuery('body,.header , footer').removeClass('dark-bg');
                    jQuery('.nav-link').removeClass('contrast');
                    jQuery('.footer-color').removeClass('dark-bg');
                    jQuery('.navbar-collapse').removeClass('dark-bg');
                    jQuery('.navbar-light .navbar-nav .show>.nav-link').removeClass('contrast');
                    jQuery('.navbar-light .navbar-nav .active>.nav-link').css({'cssText':'color: rgba(0,0,0,.5) !important'});
                    jQuery('.animated-icon1 span').removeClass('yellow-bg');
                    jQuery('.wave').removeClass('hide');
                    jQuery('.svg-blob').css('display', 'block');
                    jQuery('.blob-side').css('display', 'block');
                    jQuery('.dark-gradient').removeClass('dark-grad');
                    jQuery('.footer-bar .sub-menu .menu-item a').css({'cssText':'color:#343a40 !important'});
                    jQuery('.footer-bar > li a').css({'cssText':'color:#343a40 !important'});


                    localStorage.removeItem('accessibility_contrast');
                }
            } else {
                $body.classList.add($this.getAttribute('id'));

                if ($this.getAttribute('id') === 'accessibility-font') {
                    if (!storageFont) {
                        localStorage.setItem('accessibility_font', true);
                    }

                    text.css("font-size", fontSize + 3);


                } else {
                    if (!storageContrast) {
                        localStorage.setItem('accessibility_contrast', true);


                    }

                    jQuery('body *').addClass('contrast');
                    jQuery('body,.header , footer').addClass('dark-bg');
                    jQuery('.footer-color').addClass('dark-bg');
                    jQuery('.wave').addClass('hide');
                    jQuery('.svg-blob').css('display', 'none');
                    jQuery('.blob-side').css('display', 'none');
                    jQuery('.dark-gradient').addClass('dark-grad');
                    jQuery('.navbar-collapse').addClass('dark-bg');
                    jQuery('.navbar-light .navbar-nav .show>.nav-link').addClass('contrast');
                    jQuery('.navbar-light .navbar-nav .active>.nav-link').css({'cssText':'color: yellow !important'});
                    jQuery('.animated-icon1 span').addClass('yellow-bg');
                    jQuery('.footer-bar .sub-menu .menu-item a').css({'cssText':'color: yellow !important'});
                    jQuery('.footer-bar > li a').css({'cssText':'color: yellow !important'});


                }
            }
        };
    }



    // Listening Click Event
    for (var i = 0; i < $accessibilityButtons.length; i++) {
        $accessibilityButtons[i].addEventListener('click', accessibility());
    }
};