'use strict';

var browserify   = require('browserify');
// var uglify       = require('gulp-uglify');
// var concat       = require('gulp-concat');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
// var livereload   = require('gulp-livereload');
var source       = require('vinyl-source-stream');
var glob         = require('glob');

gulp.task('browserify', function () {

	var bundler = browserify();
	glob.sync('./test/*.spec.js').forEach(function (file) {
		bundler.add(file);
	});

	bundle(bundler, 'test.gulp.js')
		.pipe(gulp.dest('./test'));

	/*
	return browserify('test.gulp.js')
		.bundle({debug: true})
		.on('error', handleErrors)
		//.pipe(source('app.js'))
		.pipe(source('test.gulp.js'))
		//.pipe(uglify())
		//.pipe(concat('test.gulp.js'))
		.pipe(gulp.dest('./test'));
		//.pipe(livereload());
	*/
});


function bundle (bundler, outFilename) {
	return bundler
		//.transform('ractify')
		.bundle()
		.on('error', handleErrors)
		.pipe(source(outFilename));
}
