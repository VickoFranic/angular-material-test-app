var gulp = require('gulp');
var concat = require('gulp-concat');

/**
 * CSS vendor
 */
gulp.task('build-css', function() {
	var paths = [
		'./app/assets/style.css',
		'./node_modules/angular-material/angular-material.css'
	];
	return gulp.src(paths)
			   .pipe(concat('build.css'))
			   .pipe(gulp.dest('./public/css'));
});

/**
 * JS vendor
 */
gulp.task('build-js', function() {
	var paths = [
		'./node_modules/angular/angular.js',
		'./node_modules/angular-aria/angular-aria.js',
		'./node_modules/angular-animate/angular-animate.js',
		'./node_modules/angular-material/angular-material.js',
		'./node_modules/angular-ui-router/release/angular-ui-router.js',
		'./node_modules/angular-material-icons/angular-material-icons.js'
	];
	return gulp.src(paths)
			   .pipe(concat('build.js'))
			   .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
	var paths = [
		'./app/assets/*.css'
	];
	return gulp.watch(paths, ['build-css']);
});

gulp.task('default', ['build-css', 'build-js']);
