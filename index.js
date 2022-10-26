const inquirer = require('inquirer');
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const fs = require('fs');
const { choices } = require('yargs');
const generateHtml = require('./library/generateHtml.js')
const teamMembers = [];

const promptStart = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'personName',
            message: "What is the team manager's name?"

        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Managers ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number"
        }

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.personName, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptLoop();
    })
};

const promptEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'personName',
            message: "What is this team member's name?"

        },
        {
            type: 'input',
            name: 'id',
            message: "What is this team member's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this team member's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this team member's GitHub username"
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.personName, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptLoop();
    })
};

const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'personName',
            message: "What is this team member's name?"

        },
        {
            type: 'input',
            name: 'id',
            message: "What is this team member's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this team member's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is this team member attending?"
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.personName, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptLoop();
    })
};

const promptLoop = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "Would you like to add more team members? If yes, please select the type of team member you would like to add, otherwise select finish to move on.",
            choices: ['Add engineer', 'Add intern', 'Finished']
        }
    ]).then(usersChoice => {
        switch(usersChoice.choice){
            case 'Add engineer':
                promptEngineer();
                break;
            case 'Add intern':
                promptIntern();
                break;
            default:
                console.log(teamMembers)
                buildProfile();
        }
    })
};

const buildProfile = () => {
    //
    console.log('Finished')
    fs.writeFile( './assets/index.html',generateHtml(teamMembers), 'UTF-8', (err) =>
    err ? console.error(err) : console.log('Success!'))
};

promptStart();