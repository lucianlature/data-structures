'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
// var mochaPhantomJS = require('gulp-mocha-phantomjs');
var shell = require('gulp-shell');

gulp.task('scripts', function() {
	gulp.src('./test/*.spec.js', {read: false})
		.pipe(browserify({
			debug: true
		}))
		.pipe(uglify())
		.pipe(concat('test.gulp.js'))
		.pipe(gulp.dest('./test'))
		.pipe(shell([
			'mocha-phantomjs -R spec test/testrunner.html'
		]));
});
/*
gulp.task('test', function () {
  return gulp
  .src('./test/testrunner.html')
  .pipe(mochaPhantomJS());
});
*/

gulp.task('default', ['scripts']);
