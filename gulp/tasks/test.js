'use strict';

var gulp = require('gulp'),
    mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('test', function () {
    return gulp.src('dist/testrunner.html').pipe(mochaPhantomJS());
});
