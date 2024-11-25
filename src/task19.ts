import promptSync from 'prompt-sync';

console.log("Task 9: Rock, Paper, Scissors Game");
const prompt = promptSync();

const choices = ["rock", "paper", "scissors"];

// Function to get a random choice for the computer
function getComputerChoice(): string {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice: string, computerChoice: string): string {
    if (userChoice === computerChoice) {
        return "Try again!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
const userChoice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
const computerChoice = getComputerChoice();
console.log("Computer: ", computerChoice);
console.log(determineWinner(userChoice, computerChoice));