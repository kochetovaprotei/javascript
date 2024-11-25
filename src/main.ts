// main.ts
// import { add, multiply } from './mathUtils';
// console.log(add(2, 3)); // Output: 5
// console.log(multiply(4, 5)); // Output: 20


// import subtract from './mathUtils';
// console.log(subtract(10, 3)); // Output: 7

// import divide, { add, multiply } from './mathUtils';
// console.log(add(2, 3)); // Output: 5
// console.log(multiply(4, 5)); // Output: 20
// console.log(divide(10, 2)); // Output: 5

import promptSync from 'prompt-sync';
const prompt = promptSync();

// import { greetBasedOnTime } from './greetingUtils';
// console.log("Task 1: Greeting Based on Time of Day");

// let name: string = prompt("Enter your name: ");
// let time: number = parseInt(prompt("Enter the current time: "));

// console.log(greetBasedOnTime(name, time));

// import { calculate } from './calculatorsUtils';
// console.log("Task 2: Calculator with Switch Case");

// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const operation = prompt("Enter operation (+-*/): ");

// const result = calculate(num1, num2, operation);
// console.log("The result is: ", result);

// import { filterArray } from './arrayUtils';
// console.log("Task 3: Array Filtering Function with Callback");

// const numbers = prompt("Enter your numbers: ");
// const threshold = parseInt(prompt("Enter your numbers: "));
// const arrayOfNumbers = numbers.split(" ").map(Number);

// console.log(filterArray(arrayOfNumbers, (x) => x > threshold));

// import { calculateSum, calculateAverage } from './mathUtils';
// console.log("Task 4: Sum and Average with reduce");

// const numbers = prompt("Enter your numbers: ");
// const arrayOfNumbers = numbers.split(" ").map(Number);

// console.log(calculateSum(arrayOfNumbers));
// console.log(calculateAverage(arrayOfNumbers, calculateSum(arrayOfNumbers)));

// console.log("Task 5: Even or Odd Checker with Loop");
// import { checkEvenOrOdd } from './numberUtils';
// let numbers = prompt("Enter the numbers: ");
// const arrayOfNumbers = numbers.split(" ").map(Number);

// console.log(checkEvenOrOdd(arrayOfNumbers));

// console.log("Task 6: Factorial Function Using Recursion");
// import { factorial } from './mathUtils';
// let number = parseInt(prompt("Enter the numbers: "));

// console.log(factorial(number));


// console.log("Task 7: Calculate Triangle Area Based on Inputs");
// import { calculateTriangleArea } from './geometryUtils';
// let methodInput = prompt("Enter method to calculate the area of a triangle, either by using base and height (1) or by using two sides and an angle (2): ");


// if (methodInput === "1") {
//     const base = parseFloat(prompt("Enter the base of the triangle: "));
//     const height = parseFloat(prompt("Enter the height of the triangle: "));
//     console.log(calculateTriangleArea(base, height));
// } else if (methodInput === "2") {
//     const sideA = parseFloat(prompt("Enter the first side of the triangle: "));
//     const sideB = parseFloat(prompt("Enter the second side of the triangle: "));
//     const angle = parseFloat(prompt("Enter the angle between the sides in degrees: "));
//     console.log(calculateTriangleArea(sideA, sideB, angle));
// } else {
//     console.log("Invalid choice.");
// }

// console.log("Task 8: Find Minimum and Maximum in an Array");
// import { findMinMax } from './arrayUtils';
// let numbers = prompt("Enter the numbers: ");
// const arrayOfNumbers = numbers.split(" ").map(Number);

// console.log(findMinMax(arrayOfNumbers));

console.log("Task 9: Generate Multiplication Table");
import { generateMultiplicationTable } from './mathUtils';
let number = parseInt(prompt("Enter the numbers: "));

console.log(generateMultiplicationTable(number));

// console.log("Task 10: Recursive Sum of an Array");
// import { recursiveSum } from './mathUtils';
// let numbers = prompt("Enter the numbers: ");
// const arrayOfNumbers = numbers.split(" ").map(Number);

// console.log(recursiveSum(arrayOfNumbers));