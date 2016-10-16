var gulp = require('gulp');
var requireDir = require('require-dir');
requireDir('./gulp_tasks');

gulp.task('build', ['build:styles', 'build:components']);
gulp.task('watch', ['watch:styles', 'watch:components']);

gulp.task('default', ['build', 'watch']);