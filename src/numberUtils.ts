import { arrayBuffer } from "stream/consumers";

function checkEvenOrOdd(arr: number[]): string[] {
    const result: string[] = [];
    for (let num of arr) {
        if (num % 2 == 0) {
            result.push(`${num} is even`);
        }
        else if (num % 2 != 0) {
            result.push(`${num} is odd`);
            }
        }
    return result;
}

// function checkEvenOrOdd(num: number[]): string[] {
//     const result: string[] = [];
//     num.forEach((n) => {
//         result.push(n % 2 === 0 ? "Even " : "Odd");
//     });
//     return result;
// }
export {checkEvenOrOdd};
// export {checkEvenOrOdd as nickname};