/*
	gulpfile.js
	===========
	Rather than manage one giant configuration file responsible
	for creating multiple tasks, each task has been broken out into
	its own file in gulp/tasks. Any file in that folder gets automatically
	required by the loop in ./gulp/index.js (required below).

	To add a new task, simply add a new task file to gulp/tasks.
*/

require('./gulp');

/*
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('browserify', function() {
	gulp.src('./test/*.spec.js', {read: false})
		.pipe(browserify({
			debug: true
		}))
		.pipe(uglify())
		.pipe(concat('test.gulp.js'))
		.pipe(gulp.dest('./test'));
});

gulp.task('test', function () {
	return gulp.src('test/testrunner.html').pipe(mochaPhantomJS());
});

gulp.task('default', ['browserify', 'test']);
*/
