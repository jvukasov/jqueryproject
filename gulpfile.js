// Inject dependecies
const
    // modules
    gulp = require('gulp'),
    newer = require('gulp-newer'),
    htmlclean = require('gulp-htmlclean'),
    deporder = require('gulp-deporder'),
    concat = require('gulp-concat'),
    terser = require('gulp-terser'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),

    // folders
    src = 'src/',
    build = 'build/';


// HTML processing
function html() {
    return gulp.src(src + 'html/**/*')
        .pipe(newer(build))
        .pipe(htmlclean())
        .pipe(gulp.dest(build))
        .pipe(browserSync.stream());
}

// JS processing
function js() {
    const out = build + '/assets/js';
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/parsleyjs/dist/parsley.js',
        src + 'js/**/*'
        ])
        .pipe(newer(out))
        .pipe(deporder())
        .pipe(concat('bundle.min.js'))
        .pipe(terser())
        .pipe(gulp.dest(out))
        .pipe(browserSync.stream());
}

// watch for file changes
function watch(done) {
    browserSync.init({
        server: {
            baseDir: './' + build
        }
    });

    // HTML changes 
    gulp.watch(src + 'html/**/*', html);
    // JS changes 
    gulp.watch(src + 'js/**/*', js);
    // reload browser 
    browserSync.reload();

    done();
}

// create gulp single tasks
exports.html = html;
exports.js = js;
exports.watch = watch;

// run all tasks
exports.build = gulp.parallel(exports.html, exports.js);
// default task
exports.default = gulp.series(exports.build, exports.watch)    