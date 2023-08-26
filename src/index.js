import "./style.css";
import { writeNewProjectName } from "./addproject";
import { pushNewProjectToArray } from "./addproject";
import { displayArrayContents } from "./addproject";
import { deleteArrayContents } from "./addproject";

const tasksList = [];

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

writeNewProjectName();
pushNewProjectToArray();
displayArrayContents();
/* deleteArrayContents(); */
