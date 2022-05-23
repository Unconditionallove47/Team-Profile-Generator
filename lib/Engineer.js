// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const  Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name,ID,email,Github) {
        super(name,ID,email)
        this.Github= Github;
    }
    getGithub() { return this.Github; }
    getRole () { return "Engineer"}
}

module.exports = Engineer