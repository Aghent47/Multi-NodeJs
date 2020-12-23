const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite, )
            .then(archivo => console.log(`Archivo creado:` + `${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        {
            console.log('Comando no reconocido');
        }
}

/* console.log(argv); */
/* let argv2 = process.argv; */
/* console.log('Limite', argv.limite); */


/*
let param = argv[2];
let base = param.split('=')[1];

 let data = new Uint8Array(Buffer.from(''));

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${ base * i} \n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo tabla-2 ha sido creado con exito');
});

 */