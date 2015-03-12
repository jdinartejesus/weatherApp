var gulp = require('gulp'),
    plumber = require('gulp-plumber');

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(plumber())
      .pipe(gulp.dest('dist'));
});
