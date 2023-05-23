export default function createNav() {
  const contentDiv = document.getElementById("content");

  const navContainer = document.createElement("div");
  navContainer.classList.add("nav");

  const navBar = document.createElement("div");
  navBar.textContent = "my todo list";
  navBar.style.fontSize = "30px";
  navBar.style.backgroundColor = "#3d348b";
  navBar.style.padding = "20px";

  navContainer.appendChild(navBar);

  contentDiv.appendChild(navContainer);
}
