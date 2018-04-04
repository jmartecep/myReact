'use strict';

//Dependencies
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minifyCSS   = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var changed     = require('gulp-changed');

//SCSS/CSS
var SCSS_SRC    = './src/Assets/scss/**/*.scss';
var SCSS_DEST   = './src/Assets/css';

//Compile SCSS
gulp.task('compile_scss', function(){
    //Create a String of readable files using the input variable (SCSS_SRC)
    gulp.src(SCSS_SRC) 
    //Compile into standard css
    .pipe(sass().on('error', sass.logError))
    //Minimizing the CSS
    .pipe(minifyCSS())
    //Prefix of .min
    .pipe(rename({ suffix: '.min' }))
    //Only effecting changed files
    .pipe(changed(SCSS_DEST))
    //Output to Output destination
    .pipe(gulp.dest(SCSS_DEST));

});

//Dectect Changes in SCSS
gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, ['compile_scss']);
}); 

//Run 
gulp.task('default', ['watch_scss']);