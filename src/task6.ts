import promptSync from 'prompt-sync';

console.log("Task 6: Grading System");
const prompt = promptSync();
let examScore: number = parseFloat(prompt("Enter your exam score: "));
if ( 90 <= examScore && examScore < 100) {
    console.log("Your grade is: A");
}
else if ( 80 <= examScore && examScore < 90) {
    console.log("Your grade is: B");
}
else if ( 70 <= examScore && examScore < 80) {
    console.log("Your grade is: C");
}
else if ( 60 <= examScore && examScore < 70) {
    console.log("Your grade is: D");
}
else {
    console.log("Your grade is: F");
}