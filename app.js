// app.js
// Import math module

const math = require('./math');

// Calling all functions with sample values

console.log("Add:", math.add(10, 5));
console.log("Subtract:", math.subtract(10, 5));
console.log("Multiply:", math.multiply(10, 5));
console.log("Divide:", math.divide(10, 5));
console.log("Divide by zero:", math.divide(10, 0));

console.log("Modulus:", math.modulus(10, 3));

console.log("Square:", math.square(4));
console.log("Cube:", math.cube(3));

console.log("Square Root:", math.squareRoot(16));
console.log("Square Root (negative):", math.squareRoot(-4));

console.log("Average (3 numbers):", math.average(10, 20, 30));
console.log("Average (multiple numbers):", math.average(5, 10, 15, 20));

console.log("Area of Circle:", math.areaOfCircle(7));
console.log("Area of Circle (invalid):", math.areaOfCircle(-2));