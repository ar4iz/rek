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
            }
        });

    });
})(jQuery);