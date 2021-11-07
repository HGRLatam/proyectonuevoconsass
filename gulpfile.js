// src  es para buscar el archivo  // dest es para almacenarlo // watch  es para ver cambios al instante

const { src, dest, watch } = require('gulp');  // cuanto  es mulitpples funciones colocas llaves despues del cosnt 
const sass = require('gulp-sass')(require('sass')); // cuando es una sola funcion no colocas llaves despues del const
// (require('sass')) para que utilice todo sass

function css(done) {
    src('src/scss/**/*.scss')// identidicar el archivo.scss a compilar
        .pipe(sass())    //compilarlo  //.pipe es para definir la siguiente accion
        .pipe(dest('build/css'))//almacenar  en el disco duro
    done();
}


function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;