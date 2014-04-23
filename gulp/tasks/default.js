var gulp = require('gulp');

gulp.task('default', ['browserify', 'test', 'coveralls'], function () {
	gulp.start('clean');
});
