import promptSync from 'prompt-sync';

console.log("Task 5: Count words in a sentence");
const prompt = promptSync();

const sentenceUser: string = prompt("Enter any sentence: ");
const splitSentence: string[] = sentenceUser.split(" ");
console.log(splitSentence.length);
