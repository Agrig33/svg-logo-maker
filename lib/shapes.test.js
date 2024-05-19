const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
    test('Triangle render', () => {
        const triangle = new Triangle('blue');
        expect(triangle.render()).toBe('<polygon points="150,20 244,182 50,182" fill="blue" />');
    });

    test('Circle render', () => {
        const circle = new Circle('green');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />')
    });

    test('Square render', () => {
        const square = new Square('red');
        expect(square.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="red" />');
    
    });
})