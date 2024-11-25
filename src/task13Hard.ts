import promptSync from 'prompt-sync';

console.log("Task 3. String Manipulation");
const prompt = promptSync();
const fullUserName: string = prompt("Enter your full name: ");
let upperCaseName = fullUserName.toUpperCase();
let lengthName = fullUserName.length;

// Get initials
let splittedName = fullUserName.split(" ");  //it's an array
//console.log(Array.isArray(splittedName));
let initFirst = splittedName [0].charAt(0);
let initSecond = splittedName [1].charAt(0);
let inits = (initFirst + initSecond).toUpperCase();

// Console output
console.log("Name in uppercase letters: ", upperCaseName);
console.log("The length with space", lengthName);
console.log("The initials: ", inits);