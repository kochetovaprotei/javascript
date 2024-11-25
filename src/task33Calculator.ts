import promptSync from 'prompt-sync';

console.log("3. Task: Calculator function");
const prompt = promptSync();

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const operation = prompt("Enter operation (add/subtruct/multiplicate/divide): ");

function calculator(number1: number, number2: number, oper: string): number {
    switch (oper) {
        case "add":
            return number1 + number2;
        case "subtruct":
            return number1 - number2;
        case "multiplicate":
            return number1 * number2;   
        case "divide":
            return number1 / number2;
        default:
            return 0;
    }
}

const result = calculator(num1, num2, operation);
console.log("The result is: ", result);