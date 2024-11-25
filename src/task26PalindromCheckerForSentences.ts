import promptSync from 'prompt-sync';

console.log("Task 6: Palindrome Checker for sentences");
const prompt = promptSync();

const sentence: string = prompt("Enter your sentence: ").toLowerCase().replace(/[\s.,]/g, "");
console.log("Original: ", sentence);

const splitSentence: string[] = sentence.split("");
console.log("Split: ", splitSentence);

const reversedSentence: string[] = splitSentence.reverse();
console.log("Reverse: ", reversedSentence);

const joinedSentence: string = reversedSentence.join("");
console.log("Join: ", joinedSentence);

if (sentence === joinedSentence) {
    console.log("It's a palindrome");
}
else {
    console.log("It's not a palindrome");
}