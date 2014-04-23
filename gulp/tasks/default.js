var gulp = require('gulp');

gulp.task('default', ['browserify', 'test'], function () {
	gulp.start('clean');
});
