
const { createFile } = require('./multiplication/multiply');

let base = '3';
createFile(base).then(file => console.log(`File created: ${file} `)).catch(e => console.log(e));
