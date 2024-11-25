import promptSync from 'prompt-sync';

console.log("4. Task: Calculate average grade");
const prompt = promptSync();

// Input user data

const grades = prompt("Enter your grades, separated by commas, (75, 80, 90): ");
console.log(grades);

const arrayOfGrades = grades.split(",").map(Number);
console.log(arrayOfGrades);

let  sumOfGrades = arrayOfGrades.reduce(function (a, b) {
    return a + b;
});

// average result
let averageOfGrades = sumOfGrades / arrayOfGrades.length;

// consol output
console.log("The sum of numbers is:", sumOfGrades);
console.log("The average of numbers is:", Math.round(averageOfGrades));