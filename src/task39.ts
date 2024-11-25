import promptSync from 'prompt-sync';

console.log("9. Task: Recursive Function");
const prompt = promptSync();


function factorial (x: number): number {
    if (x !== 0) {
        const result = x * factorial(x-1);
        return result;
    }
    return 1;
  };

console.log(factorial(5));

// function factorial(x: number): number {
//     let result = 1;
//     for (let i = 1; i <= x; i++) {
//         result = 1;
//     }
//     return result;
// }
// console.log(factorial(5));
