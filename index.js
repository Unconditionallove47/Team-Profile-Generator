const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const newTeam = [];
const Team = require('./util/generateHtml')
function start() {
    console.log('Hello! Tell us about your new team!');
    newManager();
}
start();

function teamAdd(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add to your team?",
            choices: ['Add Engineer', 'Add Intern', 'Complete your team!'],
            name: "Team"
        }
    ]).then(answers => {
        switch (answers.team) {
            case 'Add Engineer':
                newEngineer();
                break;
            case 'Add Intern':
                newIntern();
                break;
            default:
                writeHtml();
                break;
        }
    })
}

// Create function to create Manager role
function newManager(){
    console.log('Please provide information about the manager of the team.')
    inquirer.prompt([
        {
            type:"input",
            message:"What is the team manager's name?",
            name:"managersName"
        },{
            type:"input",
            message:"What is the manager's employee number?",
            name:"managersId"
        },{
            type:"input",
            message:"What's the manager's email address?",
            name:"managersEmail"
        },{
            type:"input",
            message:"What is the manager's office number?",
            name:"managersOffice"
        }
    ]).then(answers=>{
        managerName=answers.managerName;
        const manager = new Manager(managerName,answers.managerId,answers.managerEmail,answers.managerOffice);
        newTeam.push(manager);
        teamAdd();
    })
}

// Create function to add engineer team member
function newEngineer(){
    console.log('Please provide information of desired engineer team member.');
    inquirer.prompt([
        {
            type:"input",
            message:"What is the new engineer's name?",
            name:"engineerName"
        },{
            type:"input",
            message:"What is the new engineer's employee number?",
            name:"engineerId"
        },{
            type:"input",
            message:"What is the new engineer's email address?",
            name:"engineerEmail"
        },{
            type:"input",
            message:"What is the new engineer's github username?",
            name:"engineerGit"
        }
    ]).then(answers=>{
        engineerName=answers.engineerName;
        const engineer = new Engineer(engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGit);
        newTeam.push(engineer);
        teamAdd();
    })
}

function newIntern(){
    console.log("add intern team member.");
    inquirer.prompt([
        {
            type:"input",
            message:"What is the name of the new intern?",
            name:"internName"
        },{
            type:"input",
            message:"What is the new intern's employee number?",
            name:"internId"
        },{
            type:"input",
            message:"What is the new intern's email address?",
            name:"internEmail"
        },{
            type:"input",
            message:"What school does/did the new intern attend?",
            name:"internSchool"
        }
    ]).then(answers=>{
        internName=answers.internName;
        internSchool=answers.internSchool;
        const intern = new Intern(internName,answers.internId,answers.internEmail,internSchool);
        newTeam.push(intern);
        teamAdd();
    })
}

// Create function to write HTML file with team information to display
function writeHtml(){
    Team(newTeam);
    fs.writeFile('index.html',Team(newTeam),(err)=>
        err? console.log(err) : console.log('Team Done!'))
}