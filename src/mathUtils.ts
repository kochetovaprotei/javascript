// mathUtils.ts
// export function add(a: number, b: number): number {
//     return a + b;
//   }

// export function multiply(a: number, b: number): number {
//     return a * b;
//     }

// // export default function subtract(a: number, b: number): number {
//     // return a - b;
//     // }

//     export default function divide(a: number, b: number): number {
//         return a / b;
//       }

function calculateSum(arr: number[]): number {
  let  sum = arr.reduce(function (a, b) {
    return a + b;
});
  return sum;
}

function calculateAverage(arr: number[], calculateSum: number): number {
  return calculateSum / arr.length;
}

export {calculateSum, calculateAverage};

function factorial (x: number): number {
  if (x !== 0) {
      const result = x * factorial(x-1);
      return result;
  }
  return 1;
};

export { factorial };

function recursiveSum(arr: number[]): number {
  
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.shift() as number;
    sum = sum + recursiveSum(arr);

  return sum;
}

export {recursiveSum};


function generateMultiplicationTable(num: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${num} x ${i} = ${num * i}`);
  }
  
  return result;
}

export {generateMultiplicationTable};

export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.1416;
