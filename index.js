const {Triangle, Circle, Square} = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
const input = getUserInput();

//function for user input with requirements requesting it contains min 1 character and a max 3 characters

function getUserInput() {
    let userInput;
    do {
        userInput = prompt('Please choose a value with 1 to 3 characters:');
    if (userInput === null) {
       return null;
    } else if (userInput.length < 1 || userInput.length > 3) {
        alert('Invalid entry. Characters must be at least 1-3 characters in length. Please try again');
        }
    } while (userInput.length <1 || userInput.length > 3);
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

//function to generate logo
function createSVG(shape, shapeColor) {
    let logoShape;
    switch (shape) {
        case 'Triangle':
            logoShape = Triangle(shapeColor);
            break;
        case 'Circle':
            logoShape = Circle(shapeColor);
            break;
        case 'Square':
            logoShape = Square(shapeColor);
            break;
        default:
            throw new Error('Shape not available. Please select another shape.');
    }
    return logoShape;
}

async function createSVG() {
    try {
        const { shape, shapeColor } = await getUserInput();
        const logoInfo = shapes[shape](shapeColor);

fs.writeFile('output.svg', logoInfo);
    console.log('Logo created successfully!');
} catch (error) {
    console.log('There was an error creating logo', error);
}
}

createSVG();