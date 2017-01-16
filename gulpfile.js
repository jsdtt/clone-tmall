const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('css', function() {
  const processors = [autoprefixer, cssnano]
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'))
})
gulp.task('watch-css', function() {
  gulp.watch('./src/style.scss',['css'])
})
