import promptSync from 'prompt-sync';

console.log("Task 7. Student Grade Calculation");
const prompt = promptSync();

type Student = {
    name: string;
    grades: number[];
  };

const studentInfo: Student = {
     name: "", 
     grades: [] 
    };

studentInfo.name = prompt("Enter student's name: ");  
// Input user data with loop
for (let i = 0; i <= 4; i++) {
    let gradesInput = parseInt(prompt(`Enter your ${i+1} grade: `));
    studentInfo.grades.push(gradesInput);
}

// sum and average
let sumOfGrades = 0;
for (let i = 0; i < studentInfo.grades.length; i++) {
    sumOfGrades = sumOfGrades + studentInfo.grades[i];
}
// average result
let averageOfGrades = sumOfGrades / studentInfo.grades.length;

// Grade classification
let grade: string;

if ( 90 <= averageOfGrades && averageOfGrades < 100) {
    grade = "A";
}
else if ( 80 <= averageOfGrades && averageOfGrades < 90) {
    grade = "B";
}
else if ( 70 <= averageOfGrades && averageOfGrades < 80) {
    grade = "C";
}
else if ( 60 <= averageOfGrades && averageOfGrades < 70) {
    grade = "D";
}
else {
    grade = "F";
}
// consol output
console.log("Your resault is", averageOfGrades, "your grade is: ", grade);