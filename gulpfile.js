const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");

function compileSass() {
  return gulp
    .src("./assets/css/styles.css")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
}

function minifyCSS() {
  return gulp
    .src("./assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/minified"));
}

gulp.task("compileSass", "minify-css", minifyCSS);

gulp.task("watch", () => {
  gulp.watch("./assets/minified/*.css", minifyCSS);
});

gulp.task("default", gulp.series("compileSass", "minify-css", "watch"));