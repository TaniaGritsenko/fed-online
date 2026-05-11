const{src, dest} = require('gulp');
const cleanCss = require('gulp-clean-css');
function stylesCss(){
    return src('style/*.css')
    .pipe(cleanCss({compatibility:'ie8'}))
    .pipe(dest('dist/css'));
}
exports.stylesCss = stylesCss