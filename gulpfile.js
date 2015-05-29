'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build');

bitcoreTasks('protocol');

gulp.task('default', ['lint', 'coverage']);
