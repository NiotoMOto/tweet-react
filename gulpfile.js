var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var server = require('gulp-express');

gulp.task('server', () =>{
  server.run(['index.js']);
});

gulp.task('build', () => {
  browserify({
    entries: 'app/app.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .on('error', err => {
    console.log(err.message);
  })
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch(['app/**/*js'], ['build', server.run]);
});

gulp.task('default', ['build', 'server', 'watch']);



process.on('exit', function() {
  if (server) {
    server.kill();
  }
});
