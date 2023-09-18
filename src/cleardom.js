/* import { taskList, tasks } from "./addtask";

export const projects = [];
export let activeID = "";

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

export const projectsList = document.querySelector(".projects-list");
const projectsListHeader = document.querySelector(".project-list-header");
const newProjectInput = document.createElement("input");
const addProjectBtn = document.createElement("button");

// Add a new Object, and then push it into the array
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

	// Loop over array and display contents
	function displayArrayContents() {
		addProjectBtn.addEventListener("click", () => {
			// Create a list item with h4 tag inside
			const proj = document.createElement("li");
			const projText = document.createElement("h4");
			// Add the class "project" to each project
			for (let i = 0; i < projects.length; i++) {
				proj.classList.add("project");

				projText.textContent = projects[i].title;
			}
			projectsList.appendChild(proj);
			proj.appendChild(projText);

			// Set a data attribute to each project based on its location in the array
			proj.setAttribute("data-number", `${projects.length}`);

			// Add a button to remove array items
			function deleteArrayContents() {
				const proj = document.querySelectorAll(".project");
				const deleteBtn = document.createElement("button");
				deleteBtn.classList.toggle("delete-btn");
				deleteBtn.textContent = "Delete";

				// Add the button to each project title
				for (let pro of proj) {
					pro.appendChild(deleteBtn);
				}

				deleteBtn.addEventListener("click", (e) => {
					// Find the project index number in the array
					const findProject = projects.findIndex(
						(object) => object.title === projText.textContent
					);

					// Delete the object from the array and from the DOM
					projects.splice(findProject, 1);
					deleteBtn.parentNode.remove();
					console.log(projects);
				});

				// Set staticValue to match activeID value
				let staticValue = activeID;
				const h4 = document.querySelectorAll("h4");
				projText.parentNode.addEventListener("click", (e) => {
					// On click, add the class active to the object that was clicked, and remove it from any other object
					for (let element of h4) {
						console.log(element);
						element.classList.remove("active");
						e.target.classList.add("active");
					}

					// Change the value of activeID to match the "data-number" value
					activeID = e.target.parentNode.getAttribute("data-number");

					// Clear the DOM and then populate it again with the tasks of each project ID number
					if (staticValue != activeID && 1 <= tasks.length) {
						const listItem = document.querySelectorAll(".list-item");
						for (let item of listItem) {
							item.remove();
						}

						const findProjectTask = projects.find(
							(object) => object.title === projText.textContent
						);

						if (findProjectTask === undefined) {
							return;
						} else {
							for (let i = 0; i < parseInt(findProjectTask.tasks.length); i++) {
								const listItem = document.createElement("li");
								listItem.classList.add("list-item");
								listItem.textContent = `${findProjectTask.tasks[i].title}, ${findProjectTask.tasks[i].description}, ${findProjectTask.tasks[i].date}, ${findProjectTask.tasks[i].priority}`;
								taskList.appendChild(listItem);
							}
						}
					}
				});
			}

			// If the edit button is clicked, hide the target project name and then create a new input field and a button
			// When the button is clicked, find the project and set the name to the new name value
			function editArrayContents() {
				const proj = document.querySelectorAll(".project");
				const editBtn = document.createElement("button");
				editBtn.classList.toggle("edit-btn");
				editBtn.textContent = "Edit";
				for (let pro of proj) {
					pro.appendChild(editBtn);
				}

				editBtn.addEventListener("click", (e) => {
					editBtn.parentNode.setAttribute("id", "hide");
					const editProjectInput = document.createElement("input");
					editProjectInput.classList.toggle("edit-project");
					const editProjectBtn = document.createElement("button");
					editProjectBtn.textContent = "Edit";
					projectsList.appendChild(editProjectInput);
					projectsList.appendChild(editProjectBtn);
					const projText = document.querySelector("h4");

					editProjectBtn.addEventListener("click", (e) => {
						const findProjectTask = projects.find(
							(object) => object.title === projText.textContent
						);

						findProjectTask.title = `${editProjectInput.value}`;
						projText.textContent = `${editProjectInput.value}`;
						e.target.parentNode.removeAttribute("id", "hide");
					});
				});
			}

			deleteArrayContents();
			editArrayContents();
		});
	}

	writeNewProjectName();
	displayArrayContents();
}
 */
