let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix.js('src/js/vendors.js', 'nordakademie-hubspot/assets/js')
    .js('src/js/app.js', 'nordakademie-hubspot/assets/js')
    .sass('src/scss/vendors.scss', 'nordakademie-hubspot/assets/css')
    .sass('src/scss/app.scss', 'nordakademie-hubspot/assets/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    });
