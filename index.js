const {Triangle, Circle, Square} = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
const { userInfo } = require('os');

//function for user input with requirements requesting it contains min 1 character and a max 3 characters

function getUserInput() {
    let userInput;
    do {
        userInput = prompt('Please choose a value with 1 to 3 characters:');
    } while (!userInput || userInput.length < 1 || userInput.length > 3);
    return userInput;
}

//user questions
const questions = [ 
{
    type: 'input',
    name: 'characters', 
    prompt: 'Please enter up to 3 characters to use for your logo.',
},
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
    prompt: 'What color would you like the logo shape to be?',
},
];