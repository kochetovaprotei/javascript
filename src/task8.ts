import promptSync from 'prompt-sync';

console.log("Task 8: Time of Day Greeting");
const prompt = promptSync();
// Input user data
let userTime: number = parseInt(prompt("Enter the current time: "));

// Compare numbers
if (0 <= userTime && userTime <= 11) {
    console.log("Good morning!");
}
else if (12 <= userTime && userTime <= 17) {
    console.log("Good afternoon!");
}
else if (18 <= userTime && userTime <= 23) {
    console.log("Good evening!");
}