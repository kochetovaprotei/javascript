import promptSync from 'prompt-sync';

console.log("2. Task: Function with default parametrs");
const prompt = promptSync();

const name = prompt("Enter your name: ");
const city = prompt("Enter your city: ");

function introduce (name: string, city: string = "Unknown"): string {
    return `Hello, ${name} from ${city}!`;
  };

 if (city === "") {
  console.log(introduce(name));
 }
 else {
  console.log(introduce(name, city));
 } 
