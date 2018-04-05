const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync    	= require('browser-sync').create();

const path = {
  css: './assets/css',
  sass: './assets/sass/',
};


gulp.task('sass', function () {
  return gulp.src(path.sass + '**/*.sass')
    .pipe(sass({
      includePaths: [path.sass],
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest(path.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('browser-sync', ()=> {
  browserSync.init({
    server: './'
  });
});

gulp.task( 'watch', ['sass','browser-sync'], ()=> {
  gulp.watch( path.sass + '**/*.sass', [ 'sass' ] );
  gulp.watch( './*.html', browserSync.reload);
  gulp.watch( './assets/js/*.js', browserSync.reload);

});
gulp.task('default', ['watch']);
