const inquirer = require('inquirer');
const fs = require('fs');

const { circle, triangle, square } = require('./lib/shapes')
const { text_validator, color_validator } = require('./lib/validator');

const width = 300;
const height = 200;
const file_name = 'examples/logo.svg';

const questions = [
    {
        type: 'input',
        message: 'Enter 3 characters to be displayed in logo',
        name: 'text',
        validate: text_validator
    },
    {
        type: 'input',
        message: 'Enter text color or hexadecimal number',
        name: 'text_color',
        validate: color_validator
    },
    {
        type: 'list',
        message: 'Select your shape',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        message: 'Enter shape color or hexadecimal number',
        name: 'shape_color',
        validate: color_validator
    }
];

function generateSVG(response) {

    let shape = undefined;
    if (response.shape == 'Circle') {
        //centerX, centerY, radius, color
        shape = new circle(width/2, height/2, height/2, response.shape_color);
        
    } else if (response.shape == 'Square') {
        //height, width, color
        shape = new square(height, width, response.shape_color);
    }
    
    else if (response.shape == 'Triangle') {
        //point_1, point_2, point_3, color
        shape = new triangle([0, height - (height/6)], [width, height - (height/6)], [width/2, 0], response.shape_color);
    }

    const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="${width/2}" y="${height/2}" font-size="${height/4}" text-anchor="middle" fill="${response.text_color}">${response.text}</text>
</svg>`;

    fs.writeFile(file_name, svg, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'));
}

inquirer.prompt(questions).then((response) => generateSVG(response));