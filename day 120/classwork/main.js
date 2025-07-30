// main.js

const { add, subtract, multiply, divide } = require('./math');

console.log("Add:", add(5, 3));           // 8
console.log("Subtract:", subtract(10, 4)); // 6
console.log("Multiply:", multiply(6, 7));  // 42

try {
  console.log("Divide:", divide(12, 0));   // Error
} catch (error) {
  console.error("Math Error:", error.message);
}
