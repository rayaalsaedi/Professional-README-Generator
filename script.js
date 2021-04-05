const inquirer = require('inquirer');
const fs=require("fs");

function test(){


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Github name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Where is your Github repo name?',
      name: 'repo',
    },
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
        message: 'Provide instructions of your project.',
        name: 'instructions',
      },
    
  ])
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
  
}
test();
};
