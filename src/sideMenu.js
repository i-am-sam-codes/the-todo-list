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

  buttonContainer.appendChild(inboxButton);
  buttonContainer.appendChild(todayButton);
  buttonContainer.appendChild(weekButton);

  menu.appendChild(buttonContainer);
  contentDiv.appendChild(menu);
}
