(function() {
  'use strict';

  var gulp = require('gulp'),
      mocha = require('gulp-mocha'),
      jshint = require('gulp-jshint'),
      jscs = require('gulp-jscs'),
      gulpUtil = require('gulp-util'),
      stylish = require('jshint-stylish');

  gulp.task('mocha', function() {
    return gulp.src(['lib/**/*.spec.js', 'test/**/*.js'], {read: false})
               .pipe(mocha({reporter: 'spec'}))
               .on('error', gulpUtil.log);
  });
})();
