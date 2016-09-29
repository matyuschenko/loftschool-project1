(function() {

    var foreground_color = 'rgb(230,172,65)';
    var background_color = 'rgb(223,220,213)';
    var font_color = 'rgb(205,137,32)';

    $(".skills__chart").circliful({
        animation: 0,
        backgroundColor: background_color,
        foregroundColor: foreground_color,
        foregroundBorderWidth: 20,
        backgroundBorderWidth: 20,
        percent: 75,

        noPercentageSign: true,
        replacePercentageByText: 'HTML5',
        percentageTextSize: 20,
        fontColor: font_color
    });

    $('.timer').attr('dy', '.5em').attr('x', 70);
    $('.border').attr('cy', 70);
    $('.circle').attr('cy', 70);

})();
