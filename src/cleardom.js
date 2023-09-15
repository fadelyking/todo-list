/* import { activeID } from "./addproject";
import { taskList, tasks } from "./addtask";

export function clearDOM() {
	let staticValue = "";
	console.log(tasks.length);
	if (staticValue != activeID && tasks.length - 1 > 1) {
		console.log("Value Changed !");
		const clearTasks = document.querySelector(".task-list");
		const listItem = document.querySelector("li");
		clearTasks.removeChild(listItem);
	} else {
		console.log("its the same");
	}
}
 */