import { Project, projectMaker, projects } from "./addproject";

export class Task {
	constructor(title, description, date, priority) {
		(this.title = title),
			(this.description = description),
			(this.date = date),
			(this.priority = priority);
	}
}

const addTask = document.querySelector(".add-task");
const taskListHeader = document.querySelector("h3");
const taskList = document.querySelector(".task-list");
const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("id", "hide");

const fieldset = document.createElement("fieldset");
fieldset.textContent = "Fill the fields below";

const taskTitle = document.createElement("input");
taskTitle.setAttribute("type", "text");
taskTitle.setAttribute("name", "Title");
taskTitle.setAttribute("placeholder", "Task Title");

const taskDescription = document.createElement("input");
taskDescription.setAttribute("type", "text");
taskDescription.setAttribute("name", "Description");
taskDescription.setAttribute("placeholder", "Task Description");

const taskDate = document.createElement("input");
taskDate.setAttribute("type", "date");
taskDate.setAttribute("name", "Date");

const taskPriority = document.createElement("input");
taskPriority.setAttribute("type", "range");
taskPriority.setAttribute("name", "Priority");
taskPriority.setAttribute("placeholder", "Task Priority");

const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Submit");

addTask.appendChild(form);
form.appendChild(fieldset);
form.appendChild(taskTitle);
form.appendChild(taskDescription);
form.appendChild(taskDate);
form.appendChild(taskPriority);
form.appendChild(submitBtn);

export const tasks = [];

export function taskMaker() {
	function writeNewTaskName() {
		taskListHeader.addEventListener("click", (e) => {
			form.setAttribute("id", "unhide");
		});

		submitBtn.addEventListener("click", (e) => {
			e.preventDefault();
			form.setAttribute("id", "hide");
			const newTask = new Task(
				`${taskTitle.value}`,
				`${taskDescription.value}`,
				`${taskDate.value}`,
				`${taskPriority.value}`
			);

			const exampleTask1 = new Task(
				"Work on security",
				"Check for DDOS Attacks",
				"23-9-2023",
				"Important"
			);
			const exampleTask2 = new Task(
				"Get some Wood",
				"Wood in the Workshop",
				"21-9-2023",
				"Important"
			);
			const exampleTask3 = new Task(
				"Check for Database Leaks",
				"Go through the databases",
				"12-9-2023",
				"Not important"
			);
			const exampleTask4 = new Task("Go for a run", "Run 5KM", "25-9-2023", "Important");
			const exampleTask5 = new Task(
				"Get some Nails",
				"They have to be rounded",
				"12-3-2023",
				"Kinda important"
			);
			tasks.push(exampleTask1);
			tasks.push(exampleTask2);
			tasks.push(exampleTask3);
			tasks.push(exampleTask4);
			tasks.push(exampleTask5);
			tasks.push(newTask);

			projects[0].addTask(exampleTask1);
			projects[0].addTask(exampleTask2);
			projects[0].addTask(exampleTask3);

			console.log(projects);
		});
	}

	writeNewTaskName();
}
