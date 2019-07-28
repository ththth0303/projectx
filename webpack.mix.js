const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/app.scss', 'public/css')
   .react('resources/js/src/index.js', 'public/js');

mix.browserSync({
   proxy: {
      target: 'localhost:8000',
      reqHeaders: function () {
         return {
            host: "localhost:3000"
         };
      }
   },
   injectChanges: true,
   files: ['public/**', '!public/**.map', '!public/build/**']
});