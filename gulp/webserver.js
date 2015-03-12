var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    plumber = require('gulp-plumber');

gulp.task('webserver', function() {
  gulp.src( './dist' )
    .pipe(plumber())
    .pipe(webserver({
      livereload:       false,
      directoryListing: false
    }));
});
