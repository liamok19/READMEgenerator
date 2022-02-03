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
            name: 'installation',
        },
        {
            type: 'input',
            message:'Provide a directory to a asset reference of the app', 
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who wants to contribute on this project? Write your name', 
            name: 'contact',
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

const userResponse = ({name, licence, description,installation,usage,contact, test, questions}) => 
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
${installation}

## Usage:
Please see the below reference of the product:
${usage}

## Contribution
### Let's contribute. deets below yo!
${contact}

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
