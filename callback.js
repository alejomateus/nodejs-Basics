// setTimeout(() => {
//     console.log('Hello world');
// }, 3000);

let getUserById = (id, callback) => {
    let user = {
        name: 'Alejandro',
        id
    }
    if (id === 20) {
        callback(`User with id ${id}, not found in database`)
    } else {
        callback(null, user)
    }
}

getUserById(20, (err, user) => {
    if (err) {
        return console.log(err);
    }
    else {
        console.log('User Database', user);
    }
})