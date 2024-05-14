const {Triangle, Circle, Square} = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
const input = getUserInput();

//function for user input with requirements requesting it contains min 1 character and a max 3 characters

function getUserInput() {
    let userInput;
    do {
        userInput = prompt('Please choose a value with 1 to 3 characters:');
    if (!userInput === null || userInput.length < 1 || userInput.length > 3) {
        alert('Please try again. Characters must be at least 1-3 characters in length.');
        }
    } while (userInput === null || userInput.length < 1 || userInput.length > 3);   
}

//user questions
const questions = [ 
{
    type: 'input',
    name: 'textColor',
    prompt: 'What color would you like the text to be?',
},
{
    type: 'list',
    name: 'shape',
    prompt: 'Please choose a shape from these available options',
    options: ['Trianle', 'Circle', 'Square'],
},
{
    type: 'input',
    name: 'shapeColor',
    prompt: 'Please choose a color for the logo shape',
},
];
return userInput;  