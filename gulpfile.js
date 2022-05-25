const path = require('path')
const gulp = require('gulp')
const babel = require('gulp-babel')
const less = require('gulp-less')
const autoPrefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano') 
const filter = require('gulp-filter')
const through2 = require('through2')


const paths =  {
    dest: {
        lib: path.resolve(__dirname, 'lib'),
        es: path.resolve(__dirname, 'es'),
        dist: path.resolve(__dirname, 'dist'),
    },
    styles: "src/**/*.less",
    scripts: [
        "src/**/*.{ts,tsx}",
        "!src/**/demos/**.{ts,tsx}",
        "!src/**/__tests__/**.{ts,tsx}"
    ]
}


function cssInjection (content){
    return content
        .replace(/\/style\/?'/g, "/style/css'")
        .replace(/\/style\/?"/g, '/style/css"')
        .replace(/\.less/g, '.css"')
}

function compile2Cjs (babelEnv, dest){
    process.env.BABEL_ENV = babelEnv
    return gulp
        .src(paths.scripts)
        .pipe(babel())
        .pipe(
            through2.obj(function z(file, encoding, next){
                this.push(file.clone())
                // [comp]/style/css.js 文件生成, 提供以兼容使用方非less样式处理器（sass, stylus等）
                if (file.path.match(/\/style\/index\.(js|ts|tsx)$/)) {
                    const content = file.contents.toString(encoding)
                    file.contents = Buffer.from(cssInjection(content))
                    file.path = file.path.replace(/index\.(js|ts|tsx)$/, 'css.js');
                    this.push(file)
                }
                next()
            }),
        )
        .pipe(gulp.dest(dest))
}


function cpLess (){
    return gulp.src(paths.styles)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.es))
}

function compileLess (){
    return gulp.src(paths.styles).pipe(less()).pipe(autoPrefixer()).pipe(cssnano({
        zindex: false,
        reduceIdents: false,
    }))
    .pipe(filter(function (file){ // 过滤空文件
        return file.stat && file.contents.length
    }))
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.es))
}


gulp.task('cjs', done => {
    compile2Cjs('cjs', paths.dest.lib).on('finish', done)
})

gulp.task('es', done => {
    compile2Cjs('es', paths.dest.es).on('finish', done)
})


gulp.task('styles', gulp.parallel(cpLess, compileLess))

gulp.task('default', gulp.parallel(gulp.series('cjs', 'es'), 'styles'))