const { crearArchivo } = require('./helpers/multiplicar');
const yargs = require('./config/yargs')
const colors = require('colors');

console.clear();

//console.log(yargs);


//No usar esto
// console.log(process.argv);
// const [ , , arg3 = 'base = 5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log( base );

// const base = 6;

crearArchivo(yargs.b, yargs.h, yargs.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.error(err));