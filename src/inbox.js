import { format, parseISO } from "date-fns";
import createTaskItem from "./taskUtils";

export default function loadInbox() {
  const contentDiv = document.getElementById("home");
  const pageDiv = document.getElementById("page");

  const inboxContainer = document.createElement("div");
  inboxContainer.setAttribute("id", "page");
  inboxContainer.classList.add("card");
  inboxContainer.style.width = "78%";
  inboxContainer.style.backgroundColor = "#f7b801";
  inboxContainer.style.float = "right";

  const taskList = document.createElement("ul");
  taskList.style.listStyleType = "none";

  const addTaskForm = document.createElement("form");

  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.placeholder = "Enter new task";
  taskInput.style.marginRight = "10px";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.placeholder = "Due date";
  dueDateInput.style.marginRight = "10px";

  const addButton = document.createElement("button");
  addButton.style.float = "right";
  addButton.type = "submit";
  addButton.textContent = "Add Task";

  addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText !== "") {
      const taskItem = createTaskItem(taskText, dueDate);
      taskList.appendChild(taskItem, dueDateInput);
      taskInput.value = "";
      dueDateInput.value = "";
    }
  });

  addTaskForm.appendChild(taskInput);
  addTaskForm.appendChild(dueDateInput);
  addTaskForm.appendChild(addButton);

  inboxContainer.appendChild(taskListTitle);
  inboxContainer.appendChild(taskList);
  inboxContainer.appendChild(addTaskForm);

  if (pageDiv) contentDiv.removeChild(pageDiv);
  contentDiv.appendChild(inboxContainer);
}

export let taskListTitle = document.createElement("h2");
