const multiplicar = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

multiplicar(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(colors.green("Nombre del archivo: ", nombreArchivo)))
    .catch(error => console("Error: ", error));