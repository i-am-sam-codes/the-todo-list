import createMenu from "./sideMenu";

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

  const addButton = document.createElement("button");
  addButton.style.float = "right";
  addButton.type = "submit";
  addButton.textContent = "Add Task";

  addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });

  addTaskForm.appendChild(taskInput);
  addTaskForm.appendChild(addButton);

  inboxContainer.appendChild(taskListTitle);
  inboxContainer.appendChild(taskList);
  inboxContainer.appendChild(addTaskForm);

  if (pageDiv) contentDiv.removeChild(pageDiv);
  contentDiv.appendChild(inboxContainer);
}

export let taskListTitle = document.createElement("h2");

function createTaskItem(taskText) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.addEventListener("change", () => {
    if (taskCheckbox.checked) {
      taskItem.classList.add("completed");
    } else {
      taskItem.classList.remove("completed");
    }
  });

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.style.margin = "30px";
  deleteButton.textContent = "done";
  deleteButton.addEventListener("click", () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);

  return taskItem;
}
