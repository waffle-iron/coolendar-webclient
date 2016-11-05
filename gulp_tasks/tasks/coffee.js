var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var coffee = require('gulp-coffee')

gulp.task('clear:coffee', function() {
	return del(['./builds/scripts/**/*']);
});

gulp.task('build:coffee', ['clear:coffee'], function() {
	return gulp.src('./sources/coffee/**/*.coffee')
		.pipe(coffee({bare: true})).on('error', gutil.log)
		.pipe(gulp.dest('./builds/scripts'))
});

gulp.task('watch:coffee', function() {
	return watch('./sources/coffee/**/*.coffee', function() {
		runSequence('clear:coffee', 'build:coffee');
	});
});