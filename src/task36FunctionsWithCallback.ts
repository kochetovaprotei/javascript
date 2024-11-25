import promptSync from 'prompt-sync';

console.log("6. Task: Function with callback");
const prompt = promptSync();

function modifyArray(array: number[], callback: (x: number) => number): number[] {
    const modifiedArray = array.map(callback);
    return modifiedArray;
}

console.log(modifyArray([1, 2, 3], (x) => x + 5));
