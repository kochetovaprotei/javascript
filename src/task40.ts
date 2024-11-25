import promptSync from 'prompt-sync';

console.log("10. Task: Complex Function with Optional and Rest Parameters");
const prompt = promptSync();

const titleUser = prompt("Enter your title: ");
const numbersUser = prompt("Enter your numbers: ");
const descriptionUser = prompt("Enter your description (optionally): ");
const arrayOfNumbers = numbersUser.split(" ").map(Number);

function summarize(title: string, description?: string, ...numbers: number[]): string {
  let titleAndDescription: string;
  if (descriptionUser === "") {
    titleAndDescription = `${titleUser}`;
    }
  else {
    titleAndDescription = `${titleUser} - ${descriptionUser}`;
   }  
  let sumOfArray = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sumOfArray = sumOfArray + arrayOfNumbers[i];
    }
  return `${titleAndDescription}\n${sumOfArray}`;
  

}
console.log(summarize(titleUser, descriptionUser, ...arrayOfNumbers));
console.log(summarize(titleUser, descriptionUser, 1, 2, 3, 4));

