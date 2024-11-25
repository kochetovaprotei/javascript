import promptSync from 'prompt-sync';

console.log("Task 4: Age Check");
const prompt = promptSync();
let age: number = parseInt(prompt("Enter your age: "));
if (age < 18) {
    console.log("You are not old enough to vote.");
}
else {
    console.log("You are old enough to vote.");   
}