'use strict';

var gulp = require('gulp');

gulp.task('default', ['browserify'], function () {
	gulp.start('istanbul');
});
