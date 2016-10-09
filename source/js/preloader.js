//ПРЕЛОАДЕР
$(document).ready(function() {
    var preloader = (function () {
        var init = function () {

            $('.preloader').show();

            //var show_preloader = setTimeout(function() {
            //    $('.preloader').hide();
            //}, 10000);

            $(window).on('load', function() {
                $('.preloader').hide()
            })

        };

        return {init: init};
    }());

    preloader.init();
});