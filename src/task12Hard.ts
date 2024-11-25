import promptSync from 'prompt-sync';

console.log("Task 2. User Objects with Additional Fields");
const prompt = promptSync();

type User = {
    name: string; // User's name as a string
    age: number; // User's age as a number
    isLearningProgramming: boolean; // if user is learning programming
    email: string; // User's email as a string
    isAdmin: boolean; // Indicates if the user is an admin (true/false)
    contactNumber?: number; // Optional contact number (may or may not exist)
  };

const nameUser: string = prompt("What is your name? ");
const ageUser: number = parseInt(prompt("How old are you? "));
const knowledgeUser: boolean = (prompt("Are you learning programming? (true/false) ").toLowerCase() === "true");
const emailUser: string = prompt("What is your email? ");
const rootUser: boolean = (prompt("Are you Admin? (true/false) ").toLowerCase() === "true");
const contactNumUser: number = parseInt(prompt("What is your phone number? (Optional) ")); // Optional contact number provided

    // Input user data (Creating a user Object)
const user: User = {
    name: nameUser,
    age: ageUser,
    isLearningProgramming: knowledgeUser,
    email: emailUser,
    isAdmin: rootUser,
    contactNumber: contactNumUser 
    };

const newEmail = prompt("What is you new email? ");
user.email = newEmail;

// consol output
console.log(
    `\n`+
    `Information about User:\n`+
    `You are ${user.name}.\nYou are ${user.age} years old.\n`+
    `You are learning programming: ${user.isLearningProgramming}.\n`+
    `Your email: ${user.email}. You are Admin: ${user.isAdmin}.\n`+
    `Your contact number: ${user.contactNumber}`
);
