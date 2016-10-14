// ГЛАВНОЕ МЕНЮ
$(window).on('load', function() {
    var mainMenu = (function () {
        var init = function () {
            var $hamburger = $('.hamburger'),
                $main_menu = $('.main-menu');

            $hamburger.on('click', show_main_menu);
            $main_menu.on('click', hide_main_menu);

            function show_main_menu() {
                $main_menu.show();
                $hamburger.on('click', hide_main_menu);
            }

            function hide_main_menu() {
                $main_menu.hide();
                $hamburger.on('click', show_main_menu);
            }

        };

        return {init: init};
    }());

    if (document.getElementsByClassName('hamburger').length) {
        mainMenu.init();
    }
});