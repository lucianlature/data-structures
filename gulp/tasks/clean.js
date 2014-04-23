'use strict';

var clean = require('gulp-clean');
var gulp  = require('gulp');

gulp.task('clean', function () {
	return gulp.src('./dist/*.js', { read: false })
		.pipe(clean());
});
