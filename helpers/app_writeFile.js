const fs = require("fs");

console.clear();

let salida = "";

const calcularTabla = (tabla) => {
    for(let i = 1; i <=10; i++) {
        salida += `${tabla} X ${i} = ${tabla*i} \n`;
    }
}

calcularTabla(6);
fs.writeFile("./tabla_del_.txt", salida, (err) => {
    if(err) throw err;
    console.log("file written.");
    console.log(salida);
    
});
