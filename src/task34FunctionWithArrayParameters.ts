import promptSync from 'prompt-sync';

console.log("4. Task: Function with array parameters");
const prompt = promptSync();

const numbers = prompt("Enter array of numbers: ");
const arrayOfNumbers = numbers.split(" ").map(Number);

function average(array: number[]): number {
    
    let sumOfArray = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sumOfArray = sumOfArray + arrayOfNumbers[i];
    }
    // average result
    let averageOfArray = sumOfArray / arrayOfNumbers.length;
    console.log("Average ", arrayOfNumbers, "is ", averageOfArray);
    return averageOfArray;
  }

const result = average(arrayOfNumbers);
console.log("The result is: ", result);  