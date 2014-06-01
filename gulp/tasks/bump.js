'use strict';

var gulp = require('gulp'),
    bump = require('gulp-bump');

// Update npm:
gulp.task('bump', ['browserify', 'istanbul'], function () {
    gulp.src('./package.json')
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
});
