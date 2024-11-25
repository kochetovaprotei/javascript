import promptSync from 'prompt-sync';

console.log("5. Task: Temperature Check");
const prompt = promptSync();
let temperature: number = parseInt(prompt("Enter the current temperature: "));
if (temperature <= 0) {
    console.log("It's freezing!");
}
else if ( 0 < temperature && temperature < 20) {
    console.log("It's chilly!");
}
else {
    console.log("It's warm!");   
}