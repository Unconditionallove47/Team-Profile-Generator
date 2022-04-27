// TODO: Write code to define and export the Employee class
const  employee = require("inquirer")

class Employee {
    constructor(name) {
      this.name = name;
      this.id= id;
      this.email = email;
  
    }
  addEmployee(name,id,email) {
    const e = new Employee(name,id,email);
    this.Employee.push(e);
  }
   }

   module.exports = Employee;