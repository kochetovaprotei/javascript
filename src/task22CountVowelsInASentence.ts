import promptSync from 'prompt-sync';

console.log("Task 2: Count values in a sentence");
const prompt = promptSync();

const sentenceUser: string = prompt("Enter any sentence: ").toLowerCase();
console.log("Original:", sentenceUser);
const vowels = 'aeiou';
let vowelCount = 0;
for (let i = 0; i <= sentenceUser.length; i++) {
    if (vowels.includes(sentenceUser[i])) {
        vowelCount++;
}
}
console.log("Sentence has", vowelCount, "vowels.");
