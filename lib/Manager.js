// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const  employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name,id,email) {
        super(name,id,email)
        this.officeNumber= officeNumber;
    }
}

module.exports = Manager