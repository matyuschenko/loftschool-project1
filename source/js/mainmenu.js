// ГЛАВНОЕ МЕНЮ
$(window).on('load', function() {
    var mainMenu = (function () {
        var init = function () {

            $('.hamburger:not(.clicked)').on('click', show_main_menu);
            $('.main-menu').on('click', hide_main_menu);

            function show_main_menu() {
                $('.main-menu').show();
                $('.hamburger').addClass('clicked');
                $('.hamburger.clicked').on('click', hide_main_menu);
            }

            function hide_main_menu() {
                $('.main-menu').hide();
                $('.hamburger').removeClass('clicked');
                $('.hamburger:not(.clicked)').on('click', show_main_menu);
            }

        };

        return {init: init};
    }());

    mainMenu.init();
});