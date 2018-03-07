var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var srcScss = 'scss/index.scss';
var distCss = 'css';
var minCss  = 'style.min.css';

// Styles
gulp.task('sass', function(){
    console.log('starting sass task');
    return gulp.src(srcScss)
    .pipe(plumber(function (err){
        console.log('Sass task error');
        console.log(err);
        this.emit('end');
    }))
    .pipe(sourcemaps.init())
    /*.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))*/
    .pipe(sass({
        outputStyle: 'compressed'
    })) // Converts Sass to Css with gulp sass
    .pipe(concat(minCss))
    .pipe(sourcemaps.write('/map'))
    .pipe(gulp.dest(distCss))
    .pipe(browserSync.stream());
});

// browserSync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
    
    gulp.watch("scss/**/*.scss", ['sass']);
});

gulp.task('default', ['browserSync'], function (){
    gulp.watch('index.html', browserSync.reload);
});