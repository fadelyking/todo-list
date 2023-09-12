import { Project } from ".";

// Declaring Variables
export const projects = [];

const projectsList = document.querySelector(".projects-list");
const projectsListHeader = document.querySelector(".project-list-header");
const newProjectInput = document.createElement("input");
const addProjectBtn = document.createElement("button");

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

	// Push an object into the array
	function pushNewProjectToArray() {
		addProjectBtn.addEventListener("click", () => {
			const newProject = new Project(`${newProjectInput.value}`);
			projects.push(`${newProject.title}`);

			//Unhide the header
			projectsListHeader.setAttribute("id", "none");

			//Hide input field and button
			newProjectInput.setAttribute("id", "hide");
			addProjectBtn.setAttribute("id", "hide");
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
				proj.textContent = last;
			}
			projectsList.appendChild(proj);
			deleteArrayContents();
		});
	}

	writeNewProjectName();
	pushNewProjectToArray();
	displayArrayContents();
}
