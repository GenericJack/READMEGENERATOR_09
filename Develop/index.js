// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing README:', err);
      } else {
        console.log('README generated and written successfully.');
      }
    });
  }
  

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        // Add more questions here for README prompts
      ])
      .then((answers) => {
        const markdown = generateMarkdown(answers); // Call the generateMarkdown function
        writeToFile('README.md', markdown); // Write the generated content to README.md
  
        // Additional set of questions for log.txt
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'clientele',
              message: 'Who is the client?',
            },
            {
              type: 'input',
              name: 'company',
              message: 'What is the company name?',
            },
          ])
          .then((response) => {
            // Append the responses to log.txt
            fs.appendFile('log.txt', JSON.stringify(response), (err) => {
              if (err) {
                console.error('Error appending to log.txt:', err);
              } else {
                console.log('Responses appended to log.txt.');
              }
            });
          });
      });
  }

// Function call to initialize app
init();



        
    
        // .then((response) => {
        //     fs.appendFile('log.txt',
        //     JSON.stringify({
        //         name: response.title
        //     }))
        // }) ,
        // () => consople.log('Project Complete...')