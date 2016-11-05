var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var sass = require('gulp-sass');

gulp.task('clear:sass', function() {
	return del(['./app/public/stylesheets/**/*']);
});

gulp.task('build:sass', ['clear:sass'], function() {
	return gulp.src('./sources/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/public/stylesheets'))
});

gulp.task('watch:sass', function() {
	return watch('./sources/sass/**/*.scss', function() {
		runSequence('clear:sass', 'build:sass');
	});
});