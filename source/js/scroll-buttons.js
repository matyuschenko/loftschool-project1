// КНОПКИ ДЛЯ СКРОЛЛА СТРАНИЦЫ
$(window).on('load', function() {
    var scrollButtons = (function () {

        var init = function () {

            var button_down = $('.arrow-button_bottom'),
                button_up = $('.arrow-button_top');

            button_down.on('click', function() {
                $('html, body').animate({
                    scrollTop: $(window).height()
                }, 'slow');
            });

            button_up.on('click', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
            });
        };

        return {init: init};
    }());

    if (document.getElementsByClassName('arrow-button').length) {
        scrollButtons.init();
    }
});