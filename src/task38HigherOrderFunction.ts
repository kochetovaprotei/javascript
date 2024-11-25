import promptSync from 'prompt-sync';

console.log("8. Task: Higher-Order Function");
const prompt = promptSync();

const numbers = prompt("Enter your numbers: ");
console.log(numbers);
const arrayOfNumbers = numbers.split(" ").map(Number);

function filterArray(array: number[], comparing: (x: number) => boolean): number[] {
  const modifiedArray = array.filter(comparing);
  return modifiedArray;
}

console.log(filterArray(arrayOfNumbers, (x) => x > 3));