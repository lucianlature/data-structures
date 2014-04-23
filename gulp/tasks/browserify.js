'use strict';

var browserify   = require('browserify');
var gStreamify   = require('gulp-streamify');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var glob         = require('glob');

gulp.task('browserify', function () {

	var bundler = browserify();
	glob.sync('./test/*.spec.js').forEach(function (file) {
		bundler.add(file);
	});

	bundle(bundler, 'data-structures.js')
		.pipe(gStreamify(uglify()))
		.pipe(gStreamify(concat('data-structures.min.js')))
		.pipe(gulp.dest('./dist'));
});


function bundle (bundler, outFilename) {
	return bundler
		.bundle()
		.on('error', handleErrors)
		.pipe(source(outFilename));
}
