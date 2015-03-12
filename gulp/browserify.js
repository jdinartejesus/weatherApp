var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber');

gulp.task('browserify', function() {
    gulp.src('src/js/main.jsx')
      .pipe(plumber())
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.jsx'))
      .pipe(gulp.dest('dist/js'));
});
