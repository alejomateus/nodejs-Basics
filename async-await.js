// let getName = async ()=>{
//     throw new Error('There is no bane for this user');
//     return 'Alejandro';
// }
let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Alejandro');
        }, 3000);
    })
}
let greet = async () => {
    let name = await getName();
    return `Hello ${name}`;
}
getName().then(name => {
    console.log(name);
}).catch(err => {
});
greet().then(message => {
    console.log(message);
});