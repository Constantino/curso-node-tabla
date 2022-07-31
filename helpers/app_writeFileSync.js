const fs = require("fs");

console.clear();

const base = 5;
let salida = "";

const calcularTabla = (tabla) => {
    for(let i = 1; i <=10; i++) {
        salida += `${tabla} X ${i} = ${tabla*i} \n`;
    }
}


calcularTabla(base);

console.log(salida);

fs.writeFileSync(`./tabla_del_${base}.txt`, salida);

console.log("File written.");