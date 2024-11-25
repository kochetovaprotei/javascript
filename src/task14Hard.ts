import promptSync from 'prompt-sync';

console.log("Task 4. Calculate Age in Days");
const prompt = promptSync();
const userBirthYear: number = parseInt(prompt("Enter your year of birth: "));
const currentYear: number = new Date().getFullYear();

console.log(`Your birth year is ${userBirthYear}.\nCurrent year is ${currentYear}`);

// Calculate leap years
let numberOfLeapYears = 0;
for (let i = userBirthYear; i <= currentYear; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
        numberOfLeapYears = numberOfLeapYears + 1;
    }
}
// Calculate the age
let totalYears = currentYear - userBirthYear;
let normalYears = totalYears - numberOfLeapYears;
let ageInDays = normalYears * 365 + numberOfLeapYears * 366;
console.log("Your age in days is:", ageInDays);
