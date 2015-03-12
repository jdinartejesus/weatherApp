var gulp = require('gulp');

gulp.task('watch', function() {
    // Watch any files in dist/, reload on change
    gulp.watch('src/**/*.*', ['default']);
});
