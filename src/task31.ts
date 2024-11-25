import promptSync from 'prompt-sync';

console.log("1. Task: Basic greeting function");
const prompt = promptSync();

const name = prompt("Enter your name: ");
const greet = (name: string): string => 
    `Hello, ${name}!`;
console.log(greet(name));

// const greet = function (name: string): string {
//     return `Hello, ${name}`;
//   };

// function greet(name: string): string {
//     return `Hello, ${name}!`;
//   }