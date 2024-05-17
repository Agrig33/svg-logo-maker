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
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color); 
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color); 
    }

    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
