'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  ngAnnotate = require('gulp-ng-annotate'),
  cssnano = require('gulp-cssnano'),
  maps = require('gulp-sourcemaps'),
  dependencies = require('./dependencies'),
  del = require('del');

gulp.task("default",['clean'], function(){
  gulp.start('watch');

});

gulp.task('clean', function(){
  console.log('cleaning previous compiled files...');
  del(
    [ 'src/public/maps',
      'src/public/js/app.min.js',
      'src/public/css/app.min.css']);
});

gulp.task('sass', function () {
  console.log('compiling sass files.. please wait');
  return gulp.src(dependencies.css)
    //.pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.min.css'))
    .pipe(cssnano())
    //.pipe(maps.write('../maps'))
    .pipe(gulp.dest('./src/public/css'));
});

gulp.task('js', function(){
   console.log('compiling js files.. please wait');
  return gulp.src(dependencies.js)
    //.pipe(maps.init())
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify({mangle:false, compress:true}))
    //.pipe(maps.write('../maps'))
    .pipe(gulp.dest('./src/public/js/'));
});

gulp.task("watch", ['sass', 'js'], function() {
  console.log('done');
  gulp.watch(['src/public/scss/**/*.scss'], ['sass']);
  gulp.watch(['src/public/js/**/*.js','src/public/js/*.js','!src/public/js/app.min.js'], ['js']);
  console.log('watching js and scss');
});