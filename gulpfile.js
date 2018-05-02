var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var clean = require('gulp-clean');

gulp.task('Compile Typescript', function() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});

gulp.task('Remove Tests', ['Compile Typescript'], function() {
    return gulp.src('./dist/src/**/*.test.js', {read: false})
        .pipe(clean());
});

gulp.task('Copy bin', function() {
    gulp.src('./bin/www')
        .pipe(gulp.dest('dist/bin'));
});

gulp.task('Copy eb', function() {
    gulp.src('./.elasticbeanstalk/*')
        .pipe(gulp.dest('dist/.elasticbeanstalk'));
});

gulp.task('Copy eb extensions', function() {
    gulp.src('./.ebextensions/*')
        .pipe(gulp.dest('dist/.ebextensions'));
});

gulp.task('default', ['Remove Tests', 'Copy bin', 'Copy eb', 'Copy eb extensions'])