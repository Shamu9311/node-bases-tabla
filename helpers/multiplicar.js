
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, lim = 10 ,l = false ) =>{
    try {
        let salida = '';
        let consola = '';
        for(let i = 1; i <= lim; i++){
            salida += `${base} X ${i} = ${i*base}\n`
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${i*base}\n`
        }
        if(l){
            console.log("===================".green);
            console.log(`   Tabla del: ${colors.blue(base)}`);
            console.log("===================".green);
            console.log(consola);
        }
        // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log('Archivo creado');
        // });
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}