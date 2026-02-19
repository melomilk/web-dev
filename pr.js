const parts = input.split('');

class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor (height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}

class Square extends Shape {
    constructor (side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}

let shape;

if (parts[0] === 'rect') {
    const height = Number(parts[1]);
    const width = Number(parts[2]);
    shape = new Rectangle (height, width);
} else if (parts[0] === 'square') {
    const side = Number(parts[1]);
    shape = new Square(side);
}

console.log(shape.area());