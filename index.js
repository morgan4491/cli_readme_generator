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
async function init() {

    // Prompt the user to either create a README file or exit
    const answersObj = await inquirer.prompt({
        message: 'Please select an option',
        name: 'menuChoice',
        type: 'list',
        choices: ['Create README File', 'Exit']
    });

    // If they choose to create the file, then you prompt them with all the related queations
    switch(answersObj.menuChoice) {
        case 'Create README File':
            await generateMarkdown();
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
