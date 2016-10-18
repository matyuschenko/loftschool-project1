// ФЛИППЕР
$(window).on('load', function() {
    var flipper = (function () {

        var init = function () {

            var flipper = $('.flipper');

            $('.authorize-button').on('click', function() {
                flipper.toggleClass('flipper_state_back');
            });
        };

        return {init: init};
    }());

    if (document.getElementsByClassName('flipper').length) {
        flipper.init();
    }
});