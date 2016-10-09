// ФЛИППЕР
$(window).on('load', function() {
    var flipper = (function () {
        var init = function () {

            $('.authorize-button').on('click', function() {
                var flipper = $('.flipper');
                if (flipper.hasClass('state_front')) {
                    flipper.css('transform', 'rotateY(180deg)');
                } else {
                    flipper.css('transform', 'rotateY(0deg)');
                }
                flipper.toggleClass('state_front')
            });

        };

        return {init: init};
    }());

    flipper.init();
});