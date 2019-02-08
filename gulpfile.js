const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");

function minifyCSS() {
  return gulp
    .src("./assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/minified"));
}

gulp.task("minify-css", minifyCSS);

gulp.task("watch", () => {
  gulp.watch("./css/*.css", minifyCSS);
});

gulp.task("default", gulp.series("minify-css","watch"));