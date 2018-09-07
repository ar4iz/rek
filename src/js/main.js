//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/popper.js/dist/umd/popper.min.js
//= ../../node_modules/slick-carousel/slick/slick.min.js
//= ../../node_modules/bootstrap/dist/js/bootstrap.min.js

(function ($) {
    $(document).ready(function () {
        $('.menu_list .menu-item-has-children').hover(
            function () {
                $(this).children('ul').addClass('active');
            },
            function () {
                $(this).children('ul').removeClass('active');
            }
        );
        $('.menuBtn').click(function(e){
            e.preventDefault();
            $('.mobileNav').addClass('active');
            $('html').addClass('hidden');
        });
        $('.mobileNav__close').click(function(e){
            e.preventDefault();
            $('.mobileNav').removeClass('active');
            $('html').removeClass('hidden');
        });
        $('.js-toggle').click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('moon_toggle')) {
                $(this).removeClass('moon_toggle').addClass('sun_toggle').parents().find('.hero_wrap').addClass('day');
            } else {
                $(this).removeClass('sun_toggle').addClass('moon_toggle').parents().find('.hero_wrap').removeClass('day');
                /*$('.js_toggle').addClass('moon_toggle').removeClass('sun_toggle').parents().find('.hero_wrap').removeClass('day');*/
            }
        });
       /* $('.menuBtn').click(function(e){
            e.preventDefault();
            $('.mobileNav').addClass('active');
            $('html').addClass('hidden');
        });
        $('.mobileNav__close').click(function(e){
            e.preventDefault();
            $('.mobileNav').removeClass('active');
            $('html').removeClass('hidden');
        });
        $('.header_btn').click(function () {
            $(this).toggleClass('icons');
            $('.header_form').toggleClass('active').find('.search-field').focus();
        });
        var navPosition = $('.top_nav').offset().top;
        $(window).scroll(function() {
            if ($(window).width() > 991) {
                var navTop=$(window).scrollTop();
                if (navPosition < navTop) {
                    $('.top_nav').addClass('sticky');
                } else {
                    $('.top_nav').removeClass('sticky');
                }
            }
        });

        $('.view_slider .view_content').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        });
        $('.mobileNav .top_list .menu-item-has-children').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $('.mobileNav .top_list .menu-item-has-children').removeClass('active');
                $(this).addClass('active');
            }
        });

        var scrollTop = $('.top_scroll');
        $(window).scroll(function () {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $(scrollTop).fadeIn();
            } else {
                $(scrollTop).fadeOut();
            }
        });
        $(scrollTop).click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        $('.printBtn').on('click', function (e) {
            e.preventDefault();
            window.print();
        });

        if ($('.calendar_link').hasClass('active')) {
            $('.active_line').slideDown();
        } else {
            $('.active_line').slideUp();
        }*/

    });
})(jQuery);