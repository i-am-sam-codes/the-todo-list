import loadInbox from "./inbox";
import loadThisWeek from "./thisWeek";
import loadToday from "./today";
import { taskListTitle } from "./inbox";

export default function createMenu() {
  const contentDiv = document.getElementById("content");

  const menu = document.createElement("div");
  menu.style.backgroundColor = "#bbbcf6";
  menu.style.width = "20%";
  menu.style.height = "300px";
  menu.style.float = "left";

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "column";
  buttonContainer.style.gap = "10px";
  buttonContainer.style.padding = "10px";
  buttonContainer.style.marginTop = "20px";

  const inboxButton = document.createElement("button");
  inboxButton.setAttribute("id", "inbox");
  inboxButton.classList.add("btn");
  inboxButton.textContent = "All Tasks";
  inboxButton.addEventListener("click", loadInbox);
  inboxButton.addEventListener("click", () => {
    taskListTitle.textContent = inboxButton.textContent;
  });

  const todayButton = document.createElement("button");
  todayButton.setAttribute("id", "today");
  todayButton.classList.add("btn");
  todayButton.textContent = "Today";
  todayButton.addEventListener("click", loadToday);
  todayButton.addEventListener("click", () => {
    taskListTitle.textContent = todayButton.textContent;
  });

  const weekButton = document.createElement("button");
  weekButton.setAttribute("id", "week");
  weekButton.classList.add("btn");
  weekButton.textContent = "This week";
  weekButton.addEventListener("click", loadThisWeek);
  weekButton.addEventListener("click", () => {
    taskListTitle.textContent = weekButton.textContent;
  });

  const menuTwo = document.createElement("div");
  menuTwo.textContent = "PROJECTS";
  menuTwo.style.fontWeight = "bold";
  menuTwo.style.fontSize = "20px";
  menuTwo.style.display = "flex";
  menuTwo.style.flexDirection = "column";
  menuTwo.style.gap = "10px";
  menuTwo.style.padding = "10px";

  const menuTwoButton = document.createElement("button");
  menuTwoButton.setAttribute("id", "add-project");
  menuTwoButton.textContent = "+ add project";

  menuTwo.appendChild(menuTwoButton);

  buttonContainer.appendChild(inboxButton);
  buttonContainer.appendChild(todayButton);
  buttonContainer.appendChild(weekButton);
  buttonContainer.appendChild(menuTwo);

  menu.appendChild(buttonContainer);
  contentDiv.appendChild(menu);
}
