// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return '';
  }
  return `
  ## License

  This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answersObj) {
  return `
  
  # ${answersObj.title}

  ${renderLicenseBadge(answersObj.license)}
  

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  ${renderLicenseLink(answersObj.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Description:
  - ${answersObj.projectDescription}
  
  ## Installation:
  - ${answersObj.installation}
  
  ${renderLicenseSection(answersObj.license)}
  
  ## Usage:
  - ${answersObj.usageInfo}
  
  ## Contributing:
  - ${answersObj.contributionGuidelines}
  
  ## Tests:
  - ${answersObj.testInstructions}

  ## Questions:
  - This application was created by [My GitHub Profile](https://github.com/${answersObj.userName}), who can be reached via email at ${answersObj.email} for any additional questions.
`;
}

export default generateMarkdown;