import promptSync from 'prompt-sync';

console.log("Task 2: Check If Number is Even or Odd");
const prompt = promptSync();
let getNumber: number = parseInt(prompt("Enter the number: "));
if (getNumber % 2 == 0) {
    console.log(getNumber, "is even");
}
else {
    console.log(getNumber, "is odd");    
}