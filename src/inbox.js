export default function loadInbox() {
  const contentDiv = document.getElementById("home");

  const inboxContainer = document.createElement("div");
  inboxContainer.textContent = "TAASK";
  inboxContainer.style.width = "70%";
  inboxContainer.style.backgroundColor = "green";
  inboxContainer.style.float = "right";

  contentDiv.appendChild(inboxContainer);
}
