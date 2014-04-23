'use strict';

var gulp = require('gulp');

gulp.task('default', ['browserify', 'test'], function () {
	gulp.start('coveralls'/*, 'clean'*/);
});
