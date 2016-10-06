// ПРЕЛОАДЕР
$(document).ready(function() {
    $('.preloader').show();

    //var show_preloader = setTimeout(function() {
    //    $('.preloader').hide();
    //}, 10000);

    $(window).on('load', function() {
        $('.preloader').hide()
    })
});

$(window).on('load', function() {
    // ГЛАВНОЕ МЕНЮ
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


    // ФЛИППЕР
    $('.authorize-button').on('click', function() {
        var flipper = $('.flipper');
        if (flipper.hasClass('state_front')) {
            flipper.css('transform', 'rotateY(180deg)');
        } else {
            flipper.css('transform', 'rotateY(0deg)');
        }
        flipper.toggleClass('state_front')
    });

    // НАВЫКИ
    if (window.location.href.indexOf('about') != -1) {
        (function() {

            var foreground_color = 'rgb(230,172,65)';
            var background_color = 'rgb(223,220,213)';
            var font_color = 'rgb(205,137,32)';

            var skills_data = {
                'skills__chart_type_html': {
                    'label': 'HTML5',
                    'percent': 95
                },
                'skills__chart_type_css': {
                    'label': 'CSS3',
                    'percent': 80
                },
                'skills__chart_type_js': {
                    'label': 'JS',
                    'percent': 80
                },
                'skills__chart_type_php': {
                    'label': 'PHP',
                    'percent': 10
                },
                'skills__chart_type_mysql': {
                    'label': 'mySQL',
                    'percent': 75
                },
                'skills__chart_type_node': {
                    'label': 'NodeJS',
                    'percent': 50
                },
                'skills__chart_type_mongo': {
                    'label': 'mongoDB',
                    'percent': 5
                },
                'skills__chart_type_git': {
                    'label': 'Git',
                    'percent': 75
                },
                'skills__chart_type_gulp': {
                    'label': 'Gulp',
                    'percent': 75
                },
                'skills__chart_type_bower': {
                    'label': 'Bower',
                    'percent': 25
                }
            };

            for (var skill in skills_data) {
                $("."+skill).circliful({
                    animation: 0,
                    backgroundColor: background_color,
                    foregroundColor: foreground_color,
                    foregroundBorderWidth: 20,
                    backgroundBorderWidth: 20,
                    percent:skills_data[skill].percent,

                    noPercentageSign: true,
                    replacePercentageByText: skills_data[skill].label,
                    percentageTextSize: 20,
                    fontColor: font_color
                });
            }

            $('.timer').attr('dy', '.5em').attr('x', 70);
            $('.border').attr('cy', 70);
            $('.circle').attr('cy', 70);

        })();
    }



    // КАРТА
    if (window.location.href.indexOf('about') != -1) {
        (function () {
            $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD7ECKASqNjr2kdFY1xJotto6NKcwsZqwI", function () {
                window.initMap = function () {
                    // Create a map object and specify the DOM element for display.
                    var map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: 55.751244, lng: 37.618423},
                        scrollwheel: false,
                        zoom: 13
                    })
                        .setOptions({
                            styles: [
                                {
                                    "featureType": "administrative",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                        {
                                            "color": "#444444"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "administrative.locality",
                                    "elementType": "labels.text",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "administrative.neighborhood",
                                    "elementType": "labels.text",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "landscape",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "color": "#f2f2f2"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "saturation": -100
                                        },
                                        {
                                            "lightness": 45
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "simplified"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.arterial",
                                    "elementType": "labels.icon",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "transit",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "color": "#46bcec"
                                        },
                                        {
                                            "visibility": "on"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "geometry.fill",
                                    "stylers": [
                                        {
                                            "color": "#d5aa3e"
                                        }
                                    ]
                                }
                            ]
                        });
                };
                initMap();
            });
        })();
    }


    // БЛОГ
    if (window.location.href.indexOf('blog') != -1) {
        var article_offsets = {};
        $('.blog-post').each(function(i, t) {
            article_offsets[$(t).offset().top] = $(t).attr('id');
        });

        var blog_nav = $('.blog-navigation');
        var blog_nav_scroll_pos = blog_nav.offset().top;
        var blog_nav_left_offset = blog_nav.offset().left;
        var blog_nav_w = blog_nav.width();

        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset,
                fixed_nav_top_margin = 30;

            if (y_scroll_pos > blog_nav_scroll_pos - fixed_nav_top_margin) {
                blog_nav.css({
                    position: 'fixed',
                    top: fixed_nav_top_margin,
                    left: blog_nav_left_offset,
                    width: blog_nav_w
                });
            } else {
                blog_nav.css({
                    position: 'static'
                });
            }

            for (var o in article_offsets) {
                if (y_scroll_pos < o && (y_scroll_pos + $(window).height()) > o) {
                    $('.blog-navigation__item').removeClass('blog-navigation__item_selected');
                    var rel_link = $('a[href*=#'+article_offsets[o]+']');
                    rel_link.addClass('blog-navigation__item_selected');
                    return;
                }
            }
        });
    }
});