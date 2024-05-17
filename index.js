const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');



//user questions
const questions = [ 
    {
        type: 'input',
        name: 'text',
        message: 'what 3 characters would you like to enter?',
        validate: (answer) => {
            if (answer.length <1 || answer.length > 3) {
                console.log('\n \Invalid entry! Characters must be 1-3 characters in length. Please try again.');
                return false;
            }
            return true;

            }
    },
{
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the text to be?',
},
{
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape from these available options:',
    choices: ['Triangle', 'Circle', 'Square'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Please choose a color for the logo shape.',
    }
];

async function getUserInput() {
    return await inquirer.prompt(questions);
}

//function to generate logo
function createSVG(userInput) {
    let logoShape;
    switch (userInput.shape) {
        case 'Triangle':
            logoShape = new Triangle(userInput.shapeColor);
            break;
        case 'Circle':
            logoShape = new Circle(userInput.shapeColor);
            break;
        case 'Square':
            logoShape = new Square(userInput.shapeColor);
            break;
        default:
            throw new Error('Shape not available. Please select another shape.');
    }
    return logoShape;
}

async function run() {
    try {
        const userInput = await getUserInput();
 
        const newLogo = createSVG(userInput);

        fs.writeFile('logo.svg', newLogo.render(), function (err) {
            if (err) {
                console.log('There was an error creating the logo. Please try again.', err);
            } else {
                console.log('Logo created successfully!');
            }
        });
    } catch (error) {
        console.log('An error occurred:', error);
    }
}


run();