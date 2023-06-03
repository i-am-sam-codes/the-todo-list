export default function createTaskItem(taskText, dueDate) {
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

  const dueDateLabel = document.createElement("span");
  dueDateLabel.textContent = format(parseISO(dueDate), "MMM d, yyyy");
  dueDateLabel.style.marginLeft = "10px";

  taskItem.appendChild(dueDateLabel);
  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);

  return taskItem;
}
