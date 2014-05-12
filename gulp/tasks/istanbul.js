'use strict';

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha'); // Using mocha here, but any test framework will work


gulp.task('istanbul', function (cb) {
	gulp.src(['src/*.js'])
		.pipe(istanbul()) // Covering files
		.on('end', function () {
			gulp.src(['test/*.spec.js'])
				.pipe(mocha())
				.pipe(istanbul.writeReports()) // Creating the reports after tests runned
				.on('end', cb);
    });
});
