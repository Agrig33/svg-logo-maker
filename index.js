const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

//user questions
const questions = [ 
    {
        type: 'input',
        name: 'text',
        message: 'What 3 characters would you like to enter?',
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
    message: 'What color would you like the text to be?'
},
{
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape from these available options:',
    choices: ['Triangle', 'Circle', 'Square']
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Please choose a color for the logo shape.'
    }
];

function createShape(shape, shapeColor) {
    switch (shape) {
        case 'Triangle':
            return new Triangle(shapeColor);
        case 'Circle':
            return new Circle(shapeColor);
        case 'Square':
            return new Square(shapeColor);
        default:
            throw new Error('Invalid Shape. Please select from the options provided.');
    }
}

function generateSVGContent({ text, textColor, shape, shapeColor }) {
    const shapeExample = createShape(shape, shapeColor);

    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    ${shapeExample.render()}
    <text x="100" y="120" font-size="50" text-anchor="start" fill="${textColor}">${text}</text>
</svg>`;
}

async function run() {
    try {
        const userInput = await inquirer.prompt(questions);
        const svgContent = generateSVGContent(userInput);

        fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) {
                console.log('There was an error creating the logo, Please try again.' , err);
            } else {
                console.log(' Congratulations, Logo created successfully!');
            }
        });
    } catch (error) {
        console.log('An error occurred:' , error);
    }
}

run();