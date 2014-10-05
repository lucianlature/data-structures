'use strict';

var gulp = require('gulp'),
    istanbul = require('gulp-istanbul'),
    mocha = require('gulp-mocha'); // Using mocha here, but any test framework will work

gulp.task('istanbul', function (cb) {
    gulp.src(['src/*.js'])
        .pipe(istanbul()) // Covering files
        .on('finish', function () {
            gulp.src(['test/*.spec.js'])
                .pipe(mocha({reporter: 'dot'}))
                .pipe(istanbul.writeReports()) // Creating the reports after tests runned
                .on('end', cb);
        });
});
