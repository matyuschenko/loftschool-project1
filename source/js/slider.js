

// PORTFOLIO SLIDER
$(window).on('load', function () {
    var slider = (function () {
        var init = function () {

            }
            ;


        return {
            init: init
        }
    })();

    if (window.location.href.indexOf('works') != -1) {
        slider.init();
    }
});