import promptSync from 'prompt-sync';

console.log("5. Task: Function with Multiple Return Values");
const prompt = promptSync();

// Input user data
const numbers = prompt("Enter your numbers ");
console.log(numbers);
const arrayOfNumbers = numbers.split(" ").map(Number);

type objecti = {
    min: number;
    max: number
}

function minMax(array: number[]): objecti {
    
    const minimum = Math.min(...arrayOfNumbers);
    const maximum = Math.max(...arrayOfNumbers);

    let result = {
        min: minimum,
        max: maximum
    }
    return result;
  }

console.log("The result is: ", minMax(arrayOfNumbers));  

