const inquirer = require('inquirer');
const Employee = require('./test/Employee.test');
const Engineer = require('./test/Engineer.test');
const Intern = require('./test/Intern.test');
const Manager = require('./test/Manager.test');


function askQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Add a Team Member", "Add Team Member ID", "Add Team Member Email", "Add Team Member Github"]
        }
    ])
}