import loadInbox from "./inbox";
import loadThisWeek from "./thisWeek";
import loadToday from "./today";

export default function createMenu() {
  const contentDiv = document.getElementById("content");

  const menu = document.createElement("div");
  menu.style.backgroundColor = "#bbbcf6";
  menu.style.width = "258px";
  menu.style.height = "800px";
  menu.style.margin = "2px 2px 2px 0px";
  menu.style.float = "left";

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "column";
  buttonContainer.style.gap = "10px";
  buttonContainer.style.padding = "10px";
  buttonContainer.style.marginTop = "20px";

  const inboxButton = document.createElement("button");
  inboxButton.setAttribute("id", "inbox");
  inboxButton.textContent = "Inbox";
  inboxButton.addEventListener("click", loadInbox);

  const todayButton = document.createElement("button");
  todayButton.setAttribute("id", "today");
  todayButton.textContent = "Today";
  todayButton.addEventListener("click", loadToday);

  const weekButton = document.createElement("button");
  weekButton.setAttribute("id", "week");
  weekButton.textContent = "This week";
  weekButton.addEventListener("click", loadThisWeek);

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
