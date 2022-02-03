// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = function () {
    return inquirer.prompt ([
        {
            type: 'input',
            message:'What is your name', 
            name: 'name',
        },
        // 'Where are you based', 
        // 'What"s your favourite color'    
    ]);
};

// TODO: Create a function to write README file

const userResponse = ({name}) => 
    `   # READMEgenerator
        it's game time bitchs ${name}
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
