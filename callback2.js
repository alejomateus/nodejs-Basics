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
let getEmployeeSalary = (employee, callback) => {
    let salarieDB = salaries.find(salarie => salarie.id === employee.id);
    if (!salarieDB) {
        callback(`Not found salarie to employee ${employee.name}`);
    } else {
        salarieDB.name = employee.name;
        callback(null, salarieDB)
    }
}
let getEmployee = (id, callback) => {
    let employeeDB = employees.find(employee => employee.id === id);
    if (!employeeDB) {
        callback(`There isn´t employee with ID ${id}`);
    } else {
        callback(null, employeeDB)
    }
}
getEmployee(34, (err, employee) => {
    if (err) {
        console.log(err);
    } else {
        console.log(employee);
        getEmployeeSalary(employee, (err, employeeSalary) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`The salary to ${employeeSalary.name} is $${employeeSalary.value}`);
            }
        })
    }
});