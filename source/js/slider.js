// PORTFOLIO SLIDER
$(window).on('load', function () {

    var portfolio_data = {
        '0': {
            pic_url: 'assets/img/work-1.png',
            site_name: 'Сайт школы онлайн образования'
        },
        '1': {
            pic_url: 'assets/img/work-2.png',
            site_name: 'Сайт IT Loft'
        },
        '2': {
            pic_url: 'assets/img/work-3.png',
            site_name: 'Портал видеоуроков'
        },
        '3': {
            pic_url: 'assets/img/work-4.png',
            site_name: 'Сайт центра йоги'
        }
    };

    var slider = (function () {
        var init = function () {
                var buttons = $('.portfolio-arrow-button-wrapper'),
                    slider_circles = $('.slider-nav-circles__circle');

                buttons.on('click', function() {
                    var cur_project = $('.portfolio__project'),
                        cur_index = +cur_project.attr('id'),
                        direction = $(this).data()['direction'];

                    if (direction === 'left') {
                        cur_index-=1;
                    } else {
                        cur_index+=1;
                    }
                    if (cur_index < 0 || cur_index > 3) { return; }
                    $('.screenshot').attr('src', portfolio_data[cur_index].pic_url);
                    $('.work-details__h2').text(portfolio_data[cur_index].site_name);
                    cur_project.attr('id', cur_index);

                    slider_circles.removeClass('slider-nav-circles__circle_active');
                    $(slider_circles[cur_index]).addClass('slider-nav-circles__circle_active');

                })
            }
            ;


        return {
            init: init
        }
    })();

    if (document.getElementsByClassName('portfolio__slider').length) {
        slider.init();
    }
});