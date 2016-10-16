var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var sass = require('gulp-sass');

gulp.task('clear:styles', function() {
	return del(['./public/stylesheets/**/*']);
});

gulp.task('build:styles', ['clear:styles'], function() {
	return gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/stylesheets'))
});

gulp.task('watch:styles', function() {
	return watch('./sass/**/*.scss', function() {
		runSequence('clear:styles', 'build:styles');
	});
});