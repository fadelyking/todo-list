import { Project, activeID, projectMaker, projects } from "./addproject";

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
export const taskList = document.querySelector(".task-list");
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

			tasks.push(newTask);
			if (projects.length >= 1 && activeID >= 1) {
				projects[activeID - 1].addTask(newTask);
				const ulList = document.createElement("ul");
				taskList.appendChild(ulList);
				const listItem = document.createElement("li");
				listItem.classList.add("list-item");
				listItem.setAttribute("task-title", `${newTask.title}`);
				const h3Tasks = document.createElement("h3");
				listItem.appendChild(h3Tasks);
				h3Tasks.textContent = `${newTask.title}, ${newTask.description}, ${newTask.date}, ${newTask.priority}`;
				ulList.appendChild(listItem);
				form.reset();
			} else {
				alert("Add and select project first!");
			}
		});
	}

	function deleteEditTask() {
		const listItem = document.querySelector(".task-list");
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.toggle("delete-btn-tasks");
		deleteBtn.textContent = "Delete";
		const editBtn = document.createElement("button");
		editBtn.classList.toggle("edit-btn-tasks");
		editBtn.textContent = "Edit";

		for (let task of listItem.children) {
			task.appendChild(editBtn);
			task.appendChild(deleteBtn);
		}

		deleteBtn.addEventListener("click", (e) => {
			// Find the project index number in the array
			for (let i = 0; i < tasks.length; i++) {
				const findTask = tasks.findIndex(
					(object) =>
						object.title === e.target.parentNode.firstChild.getAttribute("task-title")
				);
				tasks.splice(findTask, 1);
				e.target.parentNode.remove();
			}
		});
	}

	writeNewTaskName();

	submitBtn.addEventListener("click", (e) => {
		deleteEditTask();
	});
}
