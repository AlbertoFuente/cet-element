var gulp = require('gulp'),
    watch = require('gulp-watch'),
    karma = require('gulp-karma'),
    testFiles = ['cet-element.html'];

gulp.task('default', function() {

    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err;
        });
});


gulp.task('watch', function() {

    gulp.watch([
        'index.html',
        'demo.html',
        'cet-element.css',
        'cet-element.html',
        'test/basic-test.html',
        'test/index.html'
    ], function() {
        gulp.start('default');
    });
});