// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = function () {
    return inquirer.prompt ([
        {
            type: 'input',
            message:'Give your Project a title name', 
            name: 'name',
        },
        {
            type: 'input',
            message:'What licence are you working with?', 
            name: 'licence',
        },
        {
            type: 'input',
            message:'Write a brief description of the app', 
            name: 'description',
        },
        {
            type: 'input',
            message:'Write a description on how to install this app', 
            // name: 'step1',
            // name: 'step2',
            // name: 'step3',
            // name: 'step4',
            name: 'step5',
        },
        {
            type: 'input',
            message:'Provide the naming of the img or gif you want to reference from the following directory ./assets/images/', 
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Copy your github page below:', 
            name: 'github_issue',
        },
        {
            type: 'input',
            message: 'For someone to contribute place in your github repo for them to clone', 
            name: 'repo',
        },
        {
            type: 'input',
            message: 'Place in the npm install requirements for inquirer', 
            name: 'inquirer',
        },
        {
            type: 'input',
            message: 'Write a test version of the product', 
            name: 'test',
        },
        {
            type: 'input',
            message: 'Do you have any questions?', 
            name: 'questions',
        },
    ]);
};

// TODO: Create a function to write README file

const userResponse = ({name, licence, description,step1, step2, step3, step4, step5, usage, github_issue, repo, inquirer, test, questions}) => 
`

# ${name} 

### License
    ${licence} 

## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute to this project](#contribution)
- [Test](#test)
- [Questions](#questions)

## Description 
### What is the app for?
${description}

## Installation:
1. ${step1}
2. ${step2}
3. ${step3}
4. ${step4}
5. ${step5}

## Usage:
<img src='assets/images/${usage}' alt="final-look">

## Contribution
### Let's contribute. deets below yo!
#### Guidelines 

Please assign you github issue to the following link before running a Pull Request: 
    ${github_issue}
| Steps | Description | 
| 1. | Git clone the following repo |
    ${repo}
| 2.| Once the repo is sucessful. In VS code install the following: | 
    ${inquirer}    

## Test
${test}

## Questions
${questions} 

`

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answerData) => {
        console.log("What time is it. It's let's make a README time - yeehaw!");
        fs.writeFileSync('README.md', userResponse (answerData));
    })
    .catch((err) => console.log(err))
}

// Function call to initialize app
init();
