import "./style.css";
import { addNewProject } from "./addproject";

const projectList = [];
const tasksList = [];

class Projects {
	constructor(title) {
		this.title = title;
	}
}

class Tasks {
	constructor(title, description, date, priority) {
		(this.title = title),
			(this.description = description),
			(this.date = date),
			(this.priority = priority);
	}

	task() {
		return `Task Name = ${this.title} - Task Description = ${this.description}`;
	}
}

addNewProject();
const running = new Tasks("Running", "Run 5KM");
