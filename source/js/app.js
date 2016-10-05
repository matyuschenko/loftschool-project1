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

    window.initMap = function() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 55.751244, lng: 37.618423},
            scrollwheel: false,
            zoom: 13
        })
            .setOptions({styles: [
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
            ]});
    };
    initMap();

})();
