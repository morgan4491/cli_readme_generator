// TODO: Include packages needed for this application
import {promises as fs} from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Enter project title',
        name: 'title'
    },
    {
        message: 'Please enter a description of your project',
        name: 'projectDescription'
    },
    {
        message: 'Enter project installation intructions',
        name: 'installation'
    },
    {
        message: 'Project usage guidelines here',
        name: 'usageInfo'
    },
    {
        type: 'list',
        message: 'Choose your project license',
        name: 'license',
        choices: ['MIT', 'ICS', 'GPL', 'Apache',{name: 'None', value: false}]
    },
    {
        message: 'Contribution Guidelines',
        name: 'contributionGuidelines'
    },
    {
        message: 'Please enter your GitHub username',
        name: 'userName'
    },
    {
        message: 'Please enter your email',
        name: 'email'
    },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    return fs.writeFile(fileName,data);
}

// TODO: Create a function to initialize app
async function init() {

    // Prompt the user to either create a README file or exit
    const answersObj = await inquirer.prompt({
        message: 'Please select an option',
        name: 'menuChoice',
        type: 'list',
        choices: ['Create README File', 'Exit']
    });

    // If they choose to create the file, then you prompt them with all the related questions
    switch(answersObj.menuChoice) {
        case 'Create README File':
            const answers = await inquirer.prompt(questions);
            const markDownFile = generateMarkdown(answers);
            console.log('\nMarkdown file generated successfully!\n');
            await writeToFile('./README.md', markDownFile);
            init();
            break;
        default:
            console.log('\nThank you for using the README generator!\n');
    }


    // Once you have the answersObj, you pass it to your generateMarkdown function
    // inquirer.prompt(questions)
    // .then ((answersObj) => {
    //     console.log(answersObj);
    //     writeToFile("README.md",generateMarkdown(answersObj));
    // })
}

// Function call to initialize app
init();


export default init;