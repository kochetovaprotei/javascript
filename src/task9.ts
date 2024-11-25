import promptSync from 'prompt-sync';

console.log("Task 9: Login Validation");
const prompt = promptSync();

// Input user data
let userLogin: string = prompt("Enter username: ");
let userPassword: string = prompt("Enter password: ");

if (userLogin == "Admin" && userPassword == "password123") {
    console.log("Login is successful");
}
else {
    console.log("Login is failed");    
}