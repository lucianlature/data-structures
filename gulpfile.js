'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
	return gulp.src('./test/*.spec.js', {read: false})
		.pipe(browserify({
			debug: true
		}))
		.pipe(concat('test.gulp.js'))
		.pipe(gulp.dest('./test'));
});

gulp.task('build', ['scripts']);
