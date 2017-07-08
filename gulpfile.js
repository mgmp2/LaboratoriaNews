var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();


var config = {
  source: './src/',
  dist: './public/'
};

var paths = {
  assets: "assets/",
  html: "**/*.html",
  img: "img/**",
  js:"js/*.js",
  carousel: "owlcarousel/**",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  mainJS:"js/**/*.js"
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: config.source + paths.assets + paths.sass,
  js: config.source + paths.assets +  paths.js,
  img: config.source + paths.assets + paths.img,
  carousel: config.source + paths.assets + paths.carousel,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS
};

/*
tareas independientes
*/
gulp.task('html', ()=> {
  gulp.src(sources.html)
    .pipe(gulp.dest(config.dist));
});

gulp.task('sass', ()=> {
  gulp.src(sources.rootSass)
    .pipe(sass({
      outputStyle: "expanded"
      // outputStyle: "compressed"
    })
      .on ("error", sass.logError))
    .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('js', ()=> {
  gulp.src(sources.rootJS)
    //.pipe(browserify())
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task('img', ()=> {
  gulp.src(sources.img)
    .pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task('carousel', ()=> {
  gulp.src(sources.carousel)
    .pipe(gulp.dest(config.dist + paths.assets + "carousel"));
});

gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});


gulp.task("img-watch", ["img"], function (done) {
  browserSync.reload();
  done();
});


gulp.task("serve", ()=> {
  // browserSync.init(null, {
	// 	proxy: "http://localhost:5000",
  //       files: ["public/**"],
  //       port: 7000
	// });

  gulp.watch(sources.html, ["html"]);
  gulp.watch(sources.img, ["img"]);
  gulp.watch(sources.sass, ["sass"]);
  gulp.watch(sources.rootJS, ["js"]);

});
