
const { createFile, listTable } = require('./multiplication/multiply');
const  argv  = require('./config/yargs').argv;
console.log(argv);
let command = argv._[0];
switch (command) {
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        createFile(argv.base, argv.limit).then(file => console.log(`File created: ${file} `)).catch(e => console.log(e));
        break;
    default:
        break;
}
