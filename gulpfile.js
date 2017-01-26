const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
var babel = require("gulp-babel");    // 用于ES6转化ES5

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('css', function() {
  const processors = [autoprefixer, cssnano]
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'))
})
gulp.task('toes5', function () {
  return gulp.src('./src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dest'))
})
gulp.task('watch-css', function() {
  gulp.watch('./src/style.scss',['css'])
  gulp.watch('./src/action.js',['toes5'])
})
