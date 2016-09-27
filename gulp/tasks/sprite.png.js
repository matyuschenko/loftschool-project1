'use strict';

module.exports = function() {

    var sprite = require('gulp-sprite-generator');

    $.gulp.task('sprite:png', function() {
        var spriteOutput;

        spriteOutput = $.gulp.src("./source/style/**/*.css")
            .pipe(sprite({
                baseUrl:         "./source/images/",
                spriteSheetName: "sprite.png",
                spriteSheetPath: $.config.root + "/assets/img"
            }));

        spriteOutput.css.pipe($.gulp.dest($.config.root + '/assets/css'));
        return spriteOutput.img.pipe($.gulp.dest($.config.root + '/assets/img'));
    });

};
