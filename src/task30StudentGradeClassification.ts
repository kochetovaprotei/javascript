import promptSync from 'prompt-sync';

console.log("Task 7. Student Grade Calculation");
const prompt = promptSync();

type Student = {
    name: string;
    grades: number[];
  };

let student: Student = { name: "", grades: [] };
student.name = prompt("Enter the student's name: ");
let gradeInput: number;

// Input user data with loop
for (let i = 0; i < 5; i++) {
    gradeInput = parseInt(prompt(`Enter your ${i+1} grade: `));
    student.grades.push(gradeInput);
}

// sum and average
let sumOfGrades = 0;
for (let i = 0; i < student.grades.length; i++) {
    sumOfGrades = sumOfGrades + student.grades[i];
}
// average result
let averageOfGrades = sumOfGrades / student.grades.length;


// consol output
console.log(student.name, "Your result is", averageOfGrades);
console.log(averageOfGrades === 50 ? "Exam passed" : "Exam failed");