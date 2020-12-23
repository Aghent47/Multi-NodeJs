const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


/* Configuracion de Yargs */
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Genera una archivo con la tabla de multiplicar', options)
    .help()
    .argv;


module.exports = {
    argv
}