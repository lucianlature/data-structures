'use strict';

var gulp = require('gulp'),
    bump = require('gulp-bump');

gulp.task('default', ['browserify', 'istanbul']);
