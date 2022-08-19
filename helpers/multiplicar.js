const fs = require("fs");
const colors = require('colors');
const crearArchivo = async (base = 5, listar=false, hasta = 10) => {
  try {
   
    let salida = '';
    let consola = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.red} ${i} ${'='.cyan} ${base * i}\n`;
    }
    
    if(listar) {
      console.log("==============".brightMagenta);
      console.log("Tabla del:".green , colors.yellow(base));
      console.log("==============".brightYellow);

      console.log(consola);
      
    }
    
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
