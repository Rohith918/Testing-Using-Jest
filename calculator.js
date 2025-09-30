
/**
 * Check if both input arguments are numbers.
 * @param {*} a - The first input value.
 * @param {*} b - The second input value.
 * @throws Will throw an error if one of the input values is not a number.
 */
function typeCheck(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
}

/**
 * Check if the input argument is a number.
 * @param {*} a - The input value.
 * @throws Will throw an error if the input value is not a number.
 */
function typeCheckSingle(a) {
  if (typeof a !== "number") {
    throw new Error("Argument must be a number");
  }
}

/**
 * Add two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  typeCheck(a, b);
  return a + b;
}

/**
 * Subtract two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference of the two numbers.
 */
function subtract(a, b) {
  typeCheck(a, b);
  return a - b;
}

/**
 * Multiply two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(a, b) {
  typeCheck(a, b);
  return a * b;
}

/**
 * Divide two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of the two numbers.
 * @throws Will throw an error if division by zero is attempted.
 */
function divide(a, b) {
  typeCheck(a, b);
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
/**
 * Calculate the square root of a number.
 * @param {number} a - The input number.
 * @returns {number} The square root of the input number.
 * @throws Will throw an error if the input number is negative.
 */
function squareRoot(a) {
  typeCheckSingle(a);
  if (a < 0) {
    throw new Error("Square root of a negative number is not allowed");
  }
  return Math.sqrt(a);
}

/**
 * Calculate the square of a number.
 * @param {number} a - The input number.
 * @returns {number} The square of the input number.
 */
function square(a) {
  typeCheckSingle(a);
  return a * a;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  squareRoot,
  square,
};
