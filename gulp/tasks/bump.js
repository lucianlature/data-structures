'use strict';

var gulp = require('gulp'),
    bump = require('gulp-bump');

// Update npm:
gulp.task('bump', function () {
    gulp.src('./package.json')
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
});
