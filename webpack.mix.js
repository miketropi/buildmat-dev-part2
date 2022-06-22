const mix = require('laravel-mix');

mix
  .js('./src/main.js', 'assets/theme-script.bundle.js')
  .sass('./src/scss/main.scss', 'theme-stylesheet.bundle.css')
  .setPublicPath('assets');