const fs = require("fs");
const colors = require("colors");

let salida = "";

const crearArchivo = async (base = 5, listar = false, hasta) => {

    try {
        
        for(let i = 1; i <=hasta; i++) {
            salida += `${base} X ${i} = ${base*i} \n`;
        }
    
        fs.writeFile(`./salida/tabla/tabla_del_${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log("file written.");
            if(listar) console.log(colors.bgYellow(salida));
            
        });
    
        return `tabla_del_${base}.txt`;

    } catch (error) {
        throw error;
    }
}


module.exports = crearArchivo;
