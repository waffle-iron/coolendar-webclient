var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var coffee = require('gulp-coffee')

gulp.task('clear:components', function() {
	return del(['./builds/components/**/*']);
});

gulp.task('build:components', ['clear:components'], function() {
	return gulp.src('./sources/coffee/components/**/*.coffee')
		.pipe(coffee({bare: true})).on('error', gutil.log)
		.pipe(gulp.dest('./builds/components'))
});

gulp.task('watch:components', function() {
	return watch('./sources/coffee/**/*.coffee', function() {
		runSequence('clear:components', 'build:components');
	});
});