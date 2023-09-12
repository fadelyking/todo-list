import "./style.css";
import { projectMaker } from "./addproject";
import { taskMaker } from "./addtask";

// first create the add new tasks feature and then add new projects feature. Then, I would link the two classes together using the extends keyword (making Projects a parent to Tasks). Then I would add new tasks to an array within the Project object. //
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

const sampleProj = new Project("project");
const task = new Task("Golfing", "Play some Golf", "Sept", "Important");

sampleProj.addTask(task);
