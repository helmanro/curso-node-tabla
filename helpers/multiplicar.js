const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base, listar, hasta) => {
    try {
    console.clear();
 console.log('*************************************')
 console.log(`Tabla`.red,`${base}`.green)
 console.log('*************************************')
    let salida, consola = ''
    for (let step = 1; step <= hasta; step++) {
        salida += `${ base } X  ${step} = ${base*step} \n`;
        consola += `${ base }`.red +`X`.yellow + `${step} = ${base*step} \n`;
      }
      if(listar){
    console.log(consola);
      }

       
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
            return `tabla-${base}.txt`;
        } catch (err) 
        {
           throw err
          }

}

module.exports = {
    crearArchivo
}
