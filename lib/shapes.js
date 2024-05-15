class Triangle {
    constructor(textColor, shape, shapeColor) {
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {
        return`
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="120" y="150 font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle {
    constructor(textColor, shape, shapeColor) {
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {
        return`
        <circle r="80" cx="150" cy="100" fill="{this.shapeColor}" />
        <text x="150" y="150 font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Square {
    constructor(textColor, shape, shapeColor) {
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {
        return`
        <rect width="145" height="145" x="50" y="40" fill="{this.shapeColor}" />
        <text x="150" y="150 font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = { Triangle, Circle, Square };