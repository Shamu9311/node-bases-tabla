const yargs = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar.'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'Límite de la tabla.'
                    })
                    .check( (argv, options) => {
                        if ( isNaN( argv.b ) ){
                            throw 'La base tiene que se un número.'
                        }
                        return true;
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola.'
                    })
                    .argv;

module.exports = yargs;