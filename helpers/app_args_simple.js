const multiplicar = require("./multiplicar");
console.clear();

console.log(process.argv);
const [,,arg3] = process.argv;
const [,base] = arg3.split("=");

console.log(base);

multiplicar(base)
    .then(nombreArchivo => console.log("Nombre del archivo: ", nombreArchivo))
    .catch(error => console("Error: ", error));