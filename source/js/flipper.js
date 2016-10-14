// ФЛИППЕР
$(window).on('load', function() {
    var flipper = (function () {

        var init = function () {

            var flipper = $('.flipper');

            $('.authorize-button').on('click', function() {
                flipper.toggleClass('flipper_state_back');
                //if (flipper.hasClass('state_front')) {
                //    flipper.css('transform', 'rotateY(180deg)');
                //} else {
                //    flipper.css('transform', 'rotateY(0deg)');
                //}
                //flipper.toggleClass('state_front')
            });
        };

        return {init: init};
    }());

    if (document.getElementsByClassName('flipper').length) {
        flipper.init();
    }
});