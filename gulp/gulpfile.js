/**
 * Dependencias
 */
var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/**
 * Tareas
 */
gulp.task('demo', function () {
    gulp.src('js/source/*.js')
    	.pipe(jshint())
    	.pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/build'))
});

gulp.task('stylus', function() {
	
})

/**
 * Lista de tareas
 *
 * Async
 * Cuando corro la tarea "statics" se corren en forma asincrona las taras "images", "css" y "js", ninguna requiere de otra
 *
 * Ej.:
 * gulp.task('statics', ['images', 'css', 'js']);
 *
 * Sync (con dependencias)
 * Cuando corro la tarea "css" se corre primero la tarea "images" y si se completó corre la tarea "css"
 * 
 * Ej.:
 * gulp.task('css', ['images'], function () {
 * 		Acá el contenido de la tarea "css"
 * })
 *
 */ 

/**
 * Tarea por defecto (Corre solo con el compando "gulp")
 *
 * Ej.:
 * gulp.task('default', function () {
 * 		Acá el contenido de la tarea por defecto
 * })
 *
 * Tarea por defecto como lista de tarea
 *
 * Ej.:
 * gulp.task('default', ['css', 'js']);
 * 
 */

/**
 * Patrones, atributo del metodo src() mediante el cual se especifica donde y como se buscan los archivos a manipular
 *
 * 'js/source/1.js' > coincide con el archivo especifico
 * 'js/source/*.js' > coincide con todos los archivos que terminen en .js dentro de js/source
 * 'js/**'/*.js' > concide con los archivos que terminen en .js dentro de la carpeta js y dentro de sus sub-carpetas
 * '!js/source/3.js' > expluye especificamente el archivo 3.js
 * 'static/*.+(js|css) > coincide con los archivos que terminen en .js o .css dentro de la carpeta static
 * etc...
 */

/**
 * gulp.watch(), ver archivos y hacer algo cuando uno se modifique. Siempre devuelve un EventEmmitter.
 * Existen dos formas de implementarlo, mediante una tarea o mediante un callbak
 * - gulp.watch(glob, tasks) ó
 * - gulp.watch(glob, callback)
 *
 * Ej1.: gulp.watch('js/source/*.js', ['js']);
 * Cada vez que se modifique un .js dentro de la carpeta 'js/source' se ejecutará la tarea "js"
 *
 * Ej2.:
 * gulp.watch('js/source/*.js', function () {
 * 		Aquí el codigo de la acción que se desea realizar cuando haya cambios en los .js de js/source
 * })
 *
 */


 /**
  * Plugins
  *
  * http://gulpjs.com/plugins/
  * 
  * GULP-CONCAT
  * npm install --save-dev gulp-concat
  *
  * GULP-STYLUS
  * npm install --save-dev gulp-stylus
  *
  * GULP-UGLIFY
  * npm install --save-dev gulp-uglify
  *
  * GULP-MINIFY-CSS
  * npm install --save-dev gulp-minify-css
  *
  * GULP-JSHINT
  * npm install gulp-jshint --save-dev
  * css.min
  * stylus

  */




