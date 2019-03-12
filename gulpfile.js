var gulp = require('gulp');
var clean = require('gulp-clean');
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('clean', () => {
    return gulp.src('dist/*.*')
    .pipe(clean({allowEmpty:true}))
})

gulp.task('compile_css', () => {
    return gulp.src('src/style.less')
    .pipe(less())
    .pipe(gulp.dest('dist/'))
});

gulp.task('compile_js', () => {
    return gulp.src('src/*.js')
    //.pipe(concat('script.js'))
    .pipe(
        babel({plugins: ['transform-react-jsx']}))
        .pipe(gulp.dest('dist'));
});

gulp.task('compile', gulp.parallel('compile_js', 'compile_css'))

gulp.task('default', gulp.series('clean', 'compile'));
