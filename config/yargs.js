
const argv = require('yargs')
  .options('b', {
       alias :'base',
       type: 'number',
       demandOption: true,
       describe : 'Es la base de multiplicar'
  })
  .options('l', {
    alias :'listar',
    type: 'boolean',
    default: false,
    describe : 'Muestra la tabla en consola'
})
.options('h', {
    alias :'hasta',
    type: 'number',
    default: 10,
    describe : 'Muestra el valor hasta donde se multiplica'
})
  .check((argv, options)=>{
      if(isNaN(argv.b)){
          throw 'La base tiene que ser un numero';
      } else if(isNaN(argv.h)){
        throw 'Valor hasta tiene que ser un numero';
      }
      else {
      return true;
    }
  })
  .argv;

  module.exports = argv;