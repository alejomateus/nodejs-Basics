let employees = [
    {
        id: 1,
        name: 'Alejandro'
    },
    {
        id: 2,
        name: 'Catherine'
    },
    {
        id: 3,
        name: 'Lorena'
    }
]
let salaries = [
    {
        id: 1,
        value: 1000
    },
    {
        id: 2,
        value: 2000
    }
]

let getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let employeeDB = employees.find(employee => employee.id === id);
        if (!employeeDB) {
            reject(`There isn´t employee with ID ${id}`);
        } else {
            resolve(employeeDB)
        }
    });
}
let getEmployeeSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let salarieDB = salaries.find(salarie => salarie.id === employee.id);
        if (!salarieDB) {
            reject(`Not found salary to employee ${employee.name}`);
        } else {
            salarieDB.name = employee.name;
            resolve(salarieDB)
        }
    });
}
getEmployee(3).then(employee => {
    console.log('Database employee', employee);
    getEmployeeSalary(employee).then(employeeSalary => {
        console.log(`The salary to ${employeeSalary.name} is $${employeeSalary.value}`);
    }, err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
});
// Chain promises
getEmployee(2).then(employee => {
    return getEmployeeSalary(employee)
}).then(employeeSalary => {
    console.log(`The salary to ${employeeSalary.name} is $${employeeSalary.value}`);
}).catch(err => console.log(err))