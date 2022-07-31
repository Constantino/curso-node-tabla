const argv = require("yargs")
                .options({
                    "b": {
                        alias: "base",
                        type: "number",
                        demandOption: true,
                        describe: "Es la base de la tabla de multiplicar."
                    },
                    "l": {
                        alias: "listar",
                        type: "boolean",
                        demandOption: false,
                        default: false,
                        describe: "Muestra la tabla en consola."
                    },
                    "h": {
                        alias: "hasta",
                        type: "number",
                        demandOption: false,
                        default: 10,
                        describe: "Hasta que numero multiplica."
                    }
                })
                .check( (argv, options) => {
                    if(isNaN(argv.b)) {
                        throw "Base tiene que ser un numero."
                    }
                    
                    return true;
                })
                .argv;

module.exports = argv;