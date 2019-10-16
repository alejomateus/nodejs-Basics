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

let getEmployee = async(id) => {
        let employeeDB = employees.find(employee => employee.id === id);
        if (!employeeDB) {
            throw new Error(`There isn´t employee with ID ${id}`);
        } else {
            return employeeDB;
        }
}
let getEmployeeSalary = async(employee) => {
        let salarieDB = salaries.find(salarie => salarie.id === employee.id);
        if (!salarieDB) {
            throw new Error(`Not found salary to employee ${employee.name}`);
        } else {
            salarieDB.name = employee.name;
            return salarieDB;
        }
}
let getInformation = async (id) => {
    let employee = await getEmployee(id);
    let employeeSalary = await getEmployeeSalary(employee);
    return `The salary to ${employeeSalary.name} is $${employeeSalary.value}`;
}
getInformation(3)
.then(message=>console.log(message))
.catch(err=> console.log(err));