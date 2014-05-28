'use strict';

var gulp = require('gulp');

gulp.task('default', ['browserify', 'istanbul'], function () {
    gulp.src('./package.json')
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
});
