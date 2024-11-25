import promptSync from 'prompt-sync';

console.log("Task1 TypeScript");
// const prompt = require("prompt-sync")();
const prompt = promptSync();

// Input user data
let firstNumber: number = parseInt(prompt("First number: ")) || 0;
let secondNumber: number = parseInt(prompt("Second number: ")) || 0;


// Result of arithmetic
let resultAddition = firstNumber + secondNumber;
let resultSubtraction = firstNumber - secondNumber;
let resultMultiplication = firstNumber * secondNumber;
let resultDivisionFloating = firstNumber / secondNumber;
let resultDivisionInteger = Math.floor(firstNumber / secondNumber);
let resultModulo	 = firstNumber % secondNumber;
let resultExponentiation	= firstNumber ** secondNumber;

// Consol output
console.log(firstNumber + " + " + secondNumber + " = " + resultAddition);
console.log(firstNumber + " - " + secondNumber + " = " + resultSubtraction);
console.log(firstNumber + " * " + secondNumber + " = " + resultMultiplication);
console.log(firstNumber + " / " + secondNumber + " = " + resultDivisionFloating);
console.log(firstNumber + " // " + secondNumber + " = " + resultDivisionInteger);
console.log(firstNumber + " % " + secondNumber + " = " + resultModulo);
console.log(firstNumber + " ** " + secondNumber + " = " + resultExponentiation);
