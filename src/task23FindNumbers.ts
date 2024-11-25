import promptSync from 'prompt-sync';

console.log("3. Task: Minimum and maximum");
const prompt = promptSync();

// Input user data
const numbers = prompt("Enter your numbers ");
console.log(numbers);
const arrayOfNumbers = numbers.split(" ").map(Number);
// const num = arrayOfNumbers.map((number) => parseInt((number)));
// const num2 = arrayOfNumbers.map(Number);

const min = Math.min(...arrayOfNumbers);
const max = Math.max(...arrayOfNumbers);

console.log(arrayOfNumbers);
console.log(...arrayOfNumbers);

console.log("The min number is: ", min);
console.log("The max number is: ", max);