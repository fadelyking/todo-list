import "./style.css";
import { projectMaker, projects } from "./addproject";
import { taskMaker, tasks } from "./addtask";

export class Project {
	constructor(title) {
		this.title = title;
		this.tasks = [];
	}

	addTask(newTask) {
		this.tasks.push(newTask);
		console.log(newTask);
	}
}

export class Task {
	constructor(title, description, date, priority) {
		(this.title = title),
			(this.description = description),
			(this.date = date),
			(this.priority = priority);
	}
}

projectMaker();
taskMaker();
