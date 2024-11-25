import promptSync from 'prompt-sync';

console.log("Task 1: Reverse a string");
const prompt = promptSync();

const sentenceUser: string = prompt("Enter any sentence: ");
console.log("Original:", sentenceUser);
const splitSentence: string[] = sentenceUser.split("");

//const reverseSentence: string[] = splitSentence.reverse();
const reverseSentence: string[] = splitSentence.toReversed();
const joinSentence: string = reverseSentence.join("");

console.log("Split:", splitSentence);
console.log("Reverse:", reverseSentence);
console.log("Join:", joinSentence);
