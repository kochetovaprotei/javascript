import promptSync from 'prompt-sync';

console.log("Task1 TypeScript");
// const prompt = require("prompt-sync")();
const prompt = promptSync();

let userName: string = prompt("What is your name? ") || 'not inputed';
let userAge: number = parseInt(prompt("How old are you? ")) || 0; // Convert to number
let learning_programming: boolean = (prompt("Are you learning programming? (true/false) ").toLowerCase() === "true");

console.log("Your name is " + userName + " and you are " + userAge + 
    " years old and the answer to last question was " + learning_programming + ".");
