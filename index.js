// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs=require("fs");
const generateMarkdown= require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a brief description of your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Provide installation instruction.',
        name: 'instructions',
      },
      {
        type: 'input',
        message: 'Provide usage information.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Provide contribution guidelines.',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Provide test instructions',
        name: 'test',
      },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      
      
        {
          type: 'input',
          message: 'Provide instructions of your project.',
          name: 'instructions',
        },
        {
          type: 'list',
          message: 'What kind of license would you like to have?',
          name: 'license',
          choices: [
            "MIT","BSD3","APACHE2.0","NONE"
          ]
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(data=>{
    console.log(data)
    writeToFile("readme.md", generateMarkdown(data))
  })
}

// Function call to initialize app
init();
