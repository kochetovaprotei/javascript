import promptSync from 'prompt-sync';

console.log("7. Task: Function overloading");
const prompt = promptSync();

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine (a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        return 0;
    }
  };

console.log(combine(5,10));
console.log(combine("abc", "def"));