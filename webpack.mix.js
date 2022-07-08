const mix = require('laravel-mix');

mix.webpackConfig({
  stats: {
    children: true
  }
});

mix
  .js('./src/main.js', 'assets/theme-script.bundle.js')
  .sass('./src/scss/main.scss', 'theme-stylesheet.bundle.css')
  .setPublicPath('assets');