let mix = require('laravel-mix');
const {scripts} = require("laravel-mix");

mix
    .sass('resources/views/scss/style.scss','public/site/style.css')
    .sass('resources/views/scss/login.scss','public/site/login.css')
    .scripts('node_modules/jquery/dist/jquery.js', 'public/site/jquery.js')
    .scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/site/bootstrap.js');
