// math.js - Custom Math Module

// Helper function to validate numbers
function isValidNumber(...nums) {
  return nums.every(num => typeof num === "number" && !isNaN(num));
}

// Add
function add(a, b) {
  if (!isValidNumber(a, b)) return "Invalid input";
  return a + b;
}

// Subtract
function subtract(a, b) {
  if (!isValidNumber(a, b)) return "Invalid input";
  return a - b;
}

// Multiply
function multiply(a, b) {
  if (!isValidNumber(a, b)) return "Invalid input";
  return a * b;
}

// Divide
function divide(a, b) {
  if (!isValidNumber(a, b)) return "Invalid input";
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

// Modulus
function modulus(a, b) {
  if (!isValidNumber(a, b)) return "Invalid input";
  if (b === 0) return "Cannot divide by zero";
  return a % b;
}

// Square
function square(a) {
  if (!isValidNumber(a)) return "Invalid input";
  return a * a;
}

// Cube
function cube(a) {
  if (!isValidNumber(a)) return "Invalid input";
  return a * a * a;
}

// Square Root
function squareRoot(a) {
  if (!isValidNumber(a)) return "Invalid input";
  if (a < 0) return "Cannot take square root of negative number";
  return Math.sqrt(a);
}

// Average (Bonus: multiple numbers)
function average(...nums) {
  if (!nums.length || !isValidNumber(...nums)) return "Invalid input";
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  return sum / nums.length;
}

// Area of Circle (Bonus: rounded to 2 decimals)
function areaOfCircle(r) {
  if (!isValidNumber(r)) return "Invalid input";
  if (r < 0) return "Radius cannot be negative";
  return +(Math.PI * r * r).toFixed(2);
}

// Export all functions
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  square,
  cube,
  squareRoot,
  average,
  areaOfCircle
};