import promptSync from 'prompt-sync';

console.log("Task 9: Remove duplicate words");
const prompt = promptSync();

const splitSentence: string[] = prompt("Enter your sentence: ").toLowerCase().split(" ");
console.log("Original: ", splitSentence);

const repeatedWords: string[] = splitSentence.filter((element, index) => splitSentence.indexOf(element) === index);
// console.log("Repeated: ", repeatedWords);

const joinedSentence: string = repeatedWords.join(" ");
console.log("Sentence without repeated words: ", joinedSentence);
