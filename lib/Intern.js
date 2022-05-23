// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const  Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name,ID,email,School) {
        super(name,ID,email)
        this.School= School;

    
    }
    getRole() {return "Intern"}
    getSchool() { return this.School}
}


module.exports = Intern