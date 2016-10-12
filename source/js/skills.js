// НАВЫКИ
$(window).on('load', function() {
    var makeSkills = (function () {
        var init = function () {

            var foreground_color = 'rgb(230,172,65)',
                background_color = 'rgb(223,220,213)',
                font_color = 'rgb(205,137,32)',
                skills_data = {
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

        };

        return {init: init};
    }());

    if (window.location.href.indexOf('about') != -1) {
        makeSkills.init();
    }
});