let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix.js('src/js/vendors.js', 'public/assets/js')
    .js('src/js/app.js', 'public/assets/js')
    .sass('src/scss/vendors.scss', 'public/assets/css')
    .sass('src/scss/app.scss', 'public/assets/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    });
