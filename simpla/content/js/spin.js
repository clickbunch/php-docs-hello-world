jQuery(document).ready(function ($) {

    // -------------spin-------------------
    var resultWrapper = $('.spin-popup');
    var wheel = $('.wheel-img');
    var popupIsOpen = false;

    $('.cursor-text').on("click", function (event) {
        $(this).off(event);
        if (!wheel.hasClass('rotated')) {
            wheel.addClass('super-rotation');
            setTimeout(function () {
                resultWrapper.css({
                    'display': 'block'
                });
                popupIsOpen = true;
                $('.spin-inner').slideUp();
                $('.product-inner').slideDown();
                $('.order-form__subtitle').fadeIn();
            }, 8000);
            wheel.addClass('rotated');
        }
    });

    // --------------POPUP-------------------
    function closingPopup() {
        if (popupIsOpen) {
            popupIsOpen = false;
            resultWrapper.fadeOut();
            $('body,html').animate({ scrollTop: $('.toscroll').offset().top }, 400);
            $('.close-popup, .popup-button').unbind("touchend, click");
        }
    }

    $(document).keydown(function (e) {
        if (e.keyCode === 27 && popupIsOpen) {
            closingPopup();
        }
    });

    $('.close-popup, .popup-button').on("touchend, click", function (e) {
        e.preventDefault();
        closingPopup();
    });

    // --------------SCROLL-------------------
    $("a, .css-d0r61p-StyledLink, .NavigationLink, .promolink").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.toscroll').offset().top }, 400);
    });

    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");


});