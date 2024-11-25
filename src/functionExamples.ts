import promptSync from 'prompt-sync';

const prompt = promptSync();

const num1 = parseFloat(prompt(""));
const num2 = parseFloat(prompt(""));
const operation = prompt("");

function calculator(number1: number, number2: number, oper: string): number {
    switch (oper) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;   
        case "/":
            return number1 / number2;
        default:
            return 0;
    }
}

const result = calculator(num1, num2, operation);