// lib/shapes.js
class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color); 
    }

    render() {
        return `<polygon points="150,20 244,182 50,182" fill="${this.color}" />`;
    }

    getTextCoordinates() {
        const x = (150 + 244 + 10) /3;
        const y = (18 + 182 + 182) /3;
        return { x, y };
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color); 
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }

    getTextCoordinates() {
        return { x: 145, y: 120 };
    }
}

class Square extends Shape {
    constructor(color) {
        super(color); 
    }

    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }

    getTextCoordinates() {
        return { x: 150, y: 100 };
    }
}

module.exports = { Triangle, Circle, Square };
