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

const running = new Tasks("Running", "Run 5KM");

console.log(running.task());
