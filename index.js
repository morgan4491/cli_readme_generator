// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter project title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'projectDescription'
    },
    {
        type: 'input',
        message: 'Enter project installation intructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Project usage guidelines here',
        name: 'usageInfo'
    },
    {
        type: 'list',
        message: 'Choose your project license',
        name: 'license',
        choices: ['MIT', 'ICS', 'GPL', 'Apache', 'None']
    },
    {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'contributionGuidelines'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data,(err)=>{
        if(err) throw err
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((responseUserInput) => {
        console.log(responseUserInput);
        writeToFile("README.md",generateMarkdown(responseUserInput))
    })
}

// Function call to initialize app
init();
