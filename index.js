const {Triangle, Circle, Square} = require('./lib/shapes')
const fs = require('fs');
const inquirer = require('inquirer');

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
    prompt: 'Please choose a shape',
    options: ['Trianle', 'Circle', 'Square'],
},
{
    type: 'input',
    name: 'shapeColor',
    prompt: 'What color would you like the shape to be?',
},
];