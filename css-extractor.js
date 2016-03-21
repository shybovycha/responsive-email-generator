'use strict';

let critical = require('critical');

critical.generate({
    inline: false,
    base: './',
    src: 'input-html.html',
    dest: 'output.css',
    extract: true,
    minify: false
}).then(function (css) {
    console.log('>', css);
}).error(function (err) {
    console.error('!', err);
});

