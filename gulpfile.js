const {src, dest } = require('gulp')
const sass = requier ('gulp-sass')
const csso = requier ('gulp-csso')
const include =  requier ('include')
const del = require ('del')
const htmlmin = require ('htmlmin')
const sync = require ('browser-sync').create()

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(dest(('dist')))
}

exports.html = html