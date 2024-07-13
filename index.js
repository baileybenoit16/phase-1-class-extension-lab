// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side, 0);
    }
}

class Triangle extends Polygon {
    constructor(sides) {
        super(sides);
    }
    get isValid() {
        if (this.countSides !== 3) return false;

        const [a, b, c] = this.sides;
        return (a + b > c) && (a + c > b) && (b + c > a);
    }
}

class Square extends Polygon {
    constructor(sides) {
        super(sides);
    }
    get isValid() {
        if (this.countSides !==4) return false;
        const [side1, side2, side3, side4] = this.sides;
        return side1 === side2 && side2 === side3 && side3 === side4;
    }
    get area() {
        if (!this.isValid) return NaN;
        const [side1] = this.sides;
        return side1 ** 2;
    }
}