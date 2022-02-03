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
            message:'Write a brief description of the app', 
            name: 'description',
        },
        {
            type: 'input',
            message:'What is your name', 
            name: 'name',
        },
        {
            type: 'input',
            message:'What is your name', 
            name: 'name',
        },
        {
            type: 'input',
            message:'What is your name', 
            name: 'name',
        },
    ]);
};

// TODO: Create a function to write README file

const userResponse = ({name}) => 
    `   # ${name}
        it's game time bitches ${name}
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
