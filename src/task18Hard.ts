import promptSync from 'prompt-sync';

console.log("Task 8: Simple To-Do List");
const prompt = promptSync();

type Task = {
    title: string;
    isCompleted: boolean;
};

let tasks: Task[] = [];


let chooseOption = prompt(`Choose option: (1) Add task, (2) Mark tasks, (3) List all tasks `);

switch (chooseOption) {
    case "1": {
        let titlelUser: string = prompt("Enter task title: "); 
        let isCompletedUser: boolean = prompt("Enter status of task true/false: ").toLowerCase() === "true";
        tasks.push({title: titlelUser, isCompleted: isCompletedUser});
        break;
    }
    case "2": {
        const chooseTask = prompt("Choose task: ");
        const taskToUpdate = tasks.find(task => task.title === chooseTask);
        if (taskToUpdate) {
            const newStatus: boolean = prompt("What is the new status for this task? (true/false): ").toLowerCase() === "true";
            taskToUpdate.isCompleted = newStatus;
        } else {
            console.log("Task not found.");
        }
        break;
    }
    case "3": {
        tasks.forEach(function(elem) {
        console.log(elem);
    });
    break;
}
};



