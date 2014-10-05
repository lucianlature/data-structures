'use strict';

var browserify = require('browserify'),
    gStreamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream'),
    glob = require('glob');

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
