let deadpool = {
    name: 'Wade',
    lastname: 'Winston',
    power: 'Regeneration',
    getName() {
        return `${this.name} ${this.lastname} -power : ${this.power}`;
    }
}
let { name: firstName, lastname, power } = deadpool;
console.log(firstName, lastname, power);
let greet = name => `Hello ${name}`;
console.log(greet('Alejandro'));
