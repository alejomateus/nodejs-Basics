const fs = require('fs');
// const fs= require('express');
// const fs= require('./fs');
let listTable = (base, limit =10) => {
    for (let i = 0; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}
let createFile = (base, limit =10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} isn´t a number`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tables/table-${base}-al-${limit}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${base}-al-${limit}.txt`);
        });
    })
}
module.exports = {
    createFile,
    listTable
}