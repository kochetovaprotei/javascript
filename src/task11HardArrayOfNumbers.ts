import promptSync from 'prompt-sync';

console.log("Harder extra assignments");
console.log("1. Task: Array of Numberss");
const prompt = promptSync();

// Input user data
const arrayOfNumbers: number[] = [];

for (let i = 0; i < 5; i++) {
    arrayOfNumbers.push(parseFloat(prompt(`Enter the number ${i + 1}: `)));
}
console.log(arrayOfNumbers);

let  sumOfNumbers: number = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    sumOfNumbers = sumOfNumbers + arrayOfNumbers[i];
}

// average result
let averageOfNumbers = sumOfNumbers / arrayOfNumbers.length;

// consol output
console.log("The sum of numbers is:", sumOfNumbers);
console.log("The average of numbers is:", averageOfNumbers);