// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const  Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name,ID,email) {
        super(name,ID,email)
        this.officeNumber= officeNumber;
    }
}

module.exports = Manager