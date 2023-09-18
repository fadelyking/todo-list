import { taskList, tasks } from "./addtask";

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
			function deleteEditArrayContents() {
				const proj = document.querySelectorAll(".project");
				const deleteBtn = document.createElement("button");
				deleteBtn.classList.toggle("delete-btn");
				const editBtn = document.createElement("button");
				editBtn.classList.toggle("edit-btn");
				editBtn.textContent = "Edit";
				deleteBtn.textContent = "Delete";

				// Add the button to each project title
				for (let pro of proj) {
					pro.appendChild(deleteBtn);
					pro.appendChild(editBtn);
				}

				editBtn.addEventListener("click", (e) => {
					const findProject = projects.findIndex(
						(object) => object.title === projText.textContent
					);
					const editProjectInput = document.createElement("input");
					editProjectInput.classList.toggle("edit-project");
					editProjectInput.setAttribute(
						"value",
						`${e.target.parentNode.firstChild.textContent}`
					);
					const editProjectBtn = document.createElement("button");
					editProjectBtn.textContent = "Edit";
					e.target.parentNode.firstChild.classList.toggle("hide");
					e.target.parentNode.firstChild.nextSibling.classList.toggle("hide");
					e.target.parentNode.firstChild.nextSibling.nextSibling.classList.toggle("hide");
					e.target.parentNode.appendChild(editProjectInput);
					e.target.parentNode.appendChild(editProjectBtn);

					editProjectBtn.addEventListener("click", (e) => {
						const findProjectTask = projects.find(
							(object) => object.title === projText.textContent
						);

						activeID = projText.parentNode.getAttribute("data-number");
						findProjectTask.title = `${editProjectInput.value}`;
						projText.textContent = `${editProjectInput.value}`;
						e.target.parentNode.firstChild.classList.toggle("hide");
						e.target.parentNode.firstChild.nextSibling.classList.toggle("hide");
						e.target.parentNode.firstChild.nextSibling.nextSibling.classList.toggle(
							"hide"
						);

						editProjectInput.remove();
						editProjectBtn.remove();
					});
				});

				deleteBtn.addEventListener("click", (e) => {
					// Find the project index number in the array
					const findProject = projects.findIndex(
						(object) => object.title === projText.textContent
					);

					console.log(findProject);

					// Delete the object from the array and from the DOM
					projects.splice(findProject, 1);
					deleteBtn.parentNode.remove();
					console.log(projects);
				});

				// Set staticValue to match activeID value
				let staticValue = activeID;

				projText.parentNode.addEventListener("click", (e) => {
					const h4 = document.querySelectorAll("h4");
					// On click, add the class active to the object that was clicked, and remove it from any other object
					for (let element of h4) {
						element.classList.remove("active");
						e.target.classList.add("active");
					}

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

			deleteEditArrayContents();
		});
	}

	writeNewProjectName();
	displayArrayContents();
}
