const { color_validator } = require('./validator');

class circle {
    constructor(centerX, centerY, radius, color) {

        if (color_validator(color) !== true) {
            throw `Invalid color ${color}`
        }

        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.color = color;
    }

    render() {
        return `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.color}"/>`;
    }
}

class triangle {
    constructor(point_1, point_2, point_3, color) {

        if (point_1.length != 2) {
            throw `Invalid list length for point_1`
        } else if (point_2.length != 2) {
            throw `Invalid list length for point_2`
        } else if (point_2.length != 2) {
            throw `Invalid list length for point_3`
        } else if (color_validator(color) !== true) {
            throw `Invalid color ${color}`
        }

        this.point_1 = point_1;
        this.point_2 = point_2;
        this.point_3 = point_3;
        this.color = color;
    }

    render() {
        return `<polygon points="${this.point_1.join(',')},${this.point_2.join(',')},${this.point_3.join(',')}" fill="${this.color}"/>`;
    }
}

class square {
    constructor(height, width, color) {

        if (color_validator(color) !== true) {
            throw `Invalid color ${color}`
        }

        this.height = height;
        this.width = width;
        this.color = color;
    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.color}"/>`;
        
    }
}

module.exports = { circle, triangle, square };