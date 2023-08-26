// Declaring Variables
const projectsList = document.querySelector(".projects-list");
const projectsListHeader = document.querySelector(".project-list-header");
const newProject = document.createElement("input");
const addProjectBtn = document.createElement("button");

export function addNewProject() {
	// Reveal input field and a submit button on click
	projectsListHeader.addEventListener("click", (e) => {
		newProject.classList.toggle("project-input");
		newProject.setAttribute("type", "text");
		addProjectBtn.classList.toggle("project-submit");
		addProjectBtn.textContent = "Add";

		//Append Projects
		projectsList.appendChild(newProject);
		projectsList.appendChild(addProjectBtn);
	});
}
