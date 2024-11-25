import promptSync from 'prompt-sync';

console.log("8. Task: Sort number in ascending order");
const prompt = promptSync();

// Input user data
const numbers = prompt("Enter your numbers, separated by commas, (5, 80, 67):");
console.log(numbers);

const arrayOfNumbers = numbers.split(",").map(Number);
const sortArray = arrayOfNumbers.sort(function (a, b) {
    return a - b;
  });
console.log(sortArray);


// const array1 = [4, 30, 1, 21, 10000];
// array1.sort(a,b) => a-b {
//   console.log(a + " " + b);
//[4,30,1,21,10000]
//[4,1,30,21,10000]
//[1,4,30,21,10000]
//[1,4,21,30,10000]
