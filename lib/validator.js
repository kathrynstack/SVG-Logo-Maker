const parse_color = require('parse-color');

function text_validator(input) {
    if (input.length === 3) {
        return true;
    }
    return 'Need 3 Characters'
};

function color_validator(input) {
    const parsed_color = parse_color(input);
    if (parsed_color.hex) {
        return true;
    }   
    return `Color ${input} is not valid`
};

module.exports = { text_validator, color_validator };