// Import required modules
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// Define the 'sass' task
gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')  // Source folder for SCSS files
    .pipe(sourcemaps.init())  // Initialize sourcemaps
    .pipe(sass().on('error', sass.logError))  // Compile SCSS to CSS and log errors
    .pipe(sourcemaps.write('./maps'))  // Write sourcemaps
    .pipe(gulp.dest('./dist/css'));  // Destination folder for compiled CSS files
});

// Define the 'watch' task
gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));  // Watch SCSS files for changes
});

// Default task that runs when you type 'gulp' in the terminal
gulp.task('default', gulp.series('sass', 'watch'));
