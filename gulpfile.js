const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
var babel = require("gulp-babel");    // 用于ES6转化ES5

const uglify = require('gulp-uglify')
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const connect = require('gulp-connect');

gulp.task('css', function () {
  const processors = [autoprefixer, cssnano]
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'))
    // .pipe(connect.reload())
})
gulp.task('toes5', function () {
  return gulp.src('./src/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./dest'))
    // .pipe(connect.reload())
})

gulp.task('connect', function() {
  connect.server({
    livereload: true ,//自动刷新
    root: './'
  })
});

gulp.task('refresh', function() {
  gulp.src('./*.html').pipe(connect.reload())
})

gulp.task('watch', function() {
  gulp.watch('./src/style.scss', ['css','refresh'])
  gulp.watch('./src/action.js', ['toes5','refresh'])
  gulp.watch('./*.html', ['refresh'])
  // gulp.src('./*.html').pipe(connect.reload())
})
gulp.task('watch-css', ['watch','connect'])
