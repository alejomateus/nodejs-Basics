const fs = require('fs');
// const fs= require('express');
// const fs= require('./fs');

createFile = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} isn´t a number`);
            return;
        }
        let data = '';
        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${base}.txt`);
        });
    })
}
module.exports = {
    createFile
}