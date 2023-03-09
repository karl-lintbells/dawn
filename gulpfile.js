const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('styles/**/*.scss')
    .pipe(sass())
    .pipe(dest('assets'))
}

function watchTask() {
  watch('styles/**/*.scss', buildStyles)
}

exports.default = series(buildStyles, watchTask)