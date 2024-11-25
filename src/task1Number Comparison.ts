import promptSync from 'prompt-sync';
console.log("Task 1: Number Comparison");
const prompt = promptSync();

// Input user data
let firstNumber: number = parseInt(prompt("Enter the first number: "));
let secondNumber: number = parseInt(prompt("Enter the second number: "));

// Comparing numbers
if (firstNumber > secondNumber) {
    console.log(firstNumber, " is greater than", secondNumber);
}
else if (firstNumber < secondNumber) {
    console.log(firstNumber, "is less than", secondNumber);
}
else {
    console.log(firstNumber, "is equal", secondNumber);
}