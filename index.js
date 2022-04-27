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
            choices: ["Add a Team Member", "Add Team Member ID", "Add Team Member Email", "Add Team Member Github","manager officeNumber","intern school"]
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Add a Team Member":
                console.log("add team member!")
                getTeamMember();
                break;

            case "Add Team Member ID":
                console.log("Add Team Member ID!")
                getTeamMemberById();
                break;

            case "Add Team Member Email":
                console.log("Add Team Member Email!")
                getEmail();
                break;

            case "Add Team Member Github":
                console.log("Add Team Member Github!")
                getGithub()
                break;

            case "manager officeNumber":
                console.log("manager officeNumber!")
                getOfficeNumber()
                break;

            case "intern school":
                console.log("intern school!")
                getSchool()
                break;

            default:
                console.log("thanks for playing!")
                break;
        }
    })
}

function Employee() {
    inquirer.prompt({
        name: "name",
        message: "What is your name?",
        type: "input"
    }).then(({ name }) => {
        console.log(name);
        const me = new Employee(name);
        trainers.push(me)
        console.log(employees);
        askQuestion();
    })
}
function Engineer() {
    inquirer.prompt({
        name: "name",
        message: "What is your name?",
        type: "input"
    }).then(({ name }) => {
        console.log(name);
        const me = new Engineer(name);
        trainers.push(me)
        console.log(engineers);
        askQuestion();
    })
}
function Intern() {
    inquirer.prompt({
        name: "name",
        message: "What is your name?",
        type: "input"
    }).then(({ name }) => {
        console.log(name);
        const me = new Intern(name);
        trainers.push(me)
        console.log(interns);
        askQuestion();
    })
}
function Manager() {
    inquirer.prompt({
        name: "name",
        message: "What is your name?",
        type: "input"
    }).then(({ name }) => {
        console.log(name);
        const me = new Manager(name);
        trainers.push(me)
        console.log(managers);
        askQuestion();
    })
}