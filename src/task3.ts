import promptSync from 'prompt-sync';

console.log("Task 3: Password Validation");
const prompt = promptSync();
const password: string = "password123";
let passwordLength = password.length;
let getPassword: string = prompt("Enter your password: ");
if (getPassword.length >= 8) {
    console.log("Password is valid");
}
else {
    console.log("Error: Password is too short.");    
}

// function isValidPassword(password: string): boolean {
//     const requiredCharactes = ["*"];
        
//     return false;
// }