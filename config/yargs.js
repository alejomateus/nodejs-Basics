const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 1
    }
}
const argv = require('yargs').
    command('list', 'Print in console multiply table', options).
    command('create', 'Generate file with multiply table', options).argv;

module.exports= {
    argv
}