export const projects = [];

export class Project {
	constructor(title, id) {
		this.title = title;
		this.id = id;
		this.tasks = [];
	}

	addTask(newTask) {
		this.tasks.push(newTask);
	}
}

// Declaring Variables

/* const projectExample1 = new Project("Cyber Security", 1);
const projectExample2 = new Project("Sports", 2);
const projectExample3 = new Project("Database", 3);
const projectExample4 = new Project("Garden house", 4);

projects.push(projectExample1);
projects.push(projectExample2);
projects.push(projectExample3);
projects.push(projectExample4); */

const projectsList = document.querySelector(".projects-list");
const projectsListHeader = document.querySelector(".project-list-header");
const newProjectInput = document.createElement("input");
const addProjectBtn = document.createElement("button");

addProjectBtn.addEventListener("click", () => {
	let i = projects.length + 1;

	const newProject = new Project(`${newProjectInput.value}`, i);
	projects.push(newProject);

	//Unhide the header
	projectsListHeader.setAttribute("id", "none");

	//Hide input field and button
	newProjectInput.setAttribute("id", "hide");
	addProjectBtn.setAttribute("id", "hide");
});

export function projectMaker() {
	function writeNewProjectName() {
		projectsListHeader.addEventListener("click", (e) => {
			//Hide the header
			projectsListHeader.setAttribute("id", "hide");

			// Reveal input field and a submit button on click
			newProjectInput.removeAttribute("id");
			addProjectBtn.removeAttribute("id");
			newProjectInput.classList.toggle("project-input");
			newProjectInput.setAttribute("type", "text");
			addProjectBtn.classList.toggle("project-submit");
			addProjectBtn.textContent = "Add";

			//Append Projects
			projectsList.appendChild(newProjectInput);
			projectsList.appendChild(addProjectBtn);
		});
	}

	// Add a button to remove array items
	function deleteArrayContents() {
		const proj = document.querySelectorAll(".project");
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.toggle("delete-btn");
		deleteBtn.textContent = "Delete";
		for (let pro of proj) {
			pro.appendChild(deleteBtn);
			deleteBtn.addEventListener("click", (e) => {
				console.log(pro.textContent);
			});
		}
	}

	// Loop over array and display contents
	function displayArrayContents() {
		addProjectBtn.addEventListener("click", () => {
			const proj = document.createElement("li");
			for (let i = 0; i < projects.length; i++) {
				proj.classList.add("project");
				const last = projects.slice(-1);
				proj.textContent = last.title;
			}
			projectsList.appendChild(proj);
			deleteArrayContents();
		});
	}

	writeNewProjectName();
	displayArrayContents();
}

console.log(projects);
