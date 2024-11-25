import promptSync from 'prompt-sync';

console.log("Task 7: Find the Largest Number");
const prompt = promptSync();
// Input user data
let firstNumber: number = parseInt(prompt("Enter the first number: "));
let secondNumber: number = parseInt(prompt("Enter the second number: "));
let thirdNumber: number = parseInt(prompt("Enter the third number: "));

// Compare numbers
console.log("The largest number is: ", Math.max(firstNumber, secondNumber, thirdNumber));