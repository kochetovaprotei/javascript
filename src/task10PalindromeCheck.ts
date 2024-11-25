import promptSync from 'prompt-sync';

console.log("Task 10: Palindrome Check");
const prompt = promptSync();

const word: string = "radar";
console.log("Original: ", word);
const splitString: string[] = word.split("");
const reversedString: string[] = splitString.reverse();
const joinedString: string = reversedString.join("");

if (word.toLowerCase() === joinedString) {
    console.log("It's a palindrome");
}
else {
    console.log("It's not a palindrome");
}