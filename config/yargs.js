const argv = require('yargs')
  .option('b', {
     alias: 'base',
     type: 'number',
     demandOption: true,
     describe: 'Es la base de la tabla de multiplicar'
    
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    dafault: true,
    describe: 'Muestra la tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    dafault: 1,
    describe: 'Hasta que número llega la Tabla'
  })
  .check( (argv, options) => {
    if(isNaN(argv.b) || isNaN(argv.h)) {
      throw 'La base tiene q ser un numero'
    }
      return true;
  })
  .argv;

  module.exports = argv;