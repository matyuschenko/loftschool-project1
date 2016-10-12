//ПРЕЛОАДЕР
$(document).ready(function() {
    var preloader = (function () {
        var init = function () {

            $('.preloader').show();

            $(window).on('load', function() {
                $('.preloader').hide()
            })

        };

        return {init: init};
    }());

    preloader.init();
});