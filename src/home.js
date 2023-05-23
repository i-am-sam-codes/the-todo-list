export default function createHomePage() {
  const contentDiv = document.getElementById("content");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home");
  homeContainer.style.backgroundColor = "#7678ed";
  homeContainer.style.padding = "100%";

  contentDiv.appendChild(homeContainer);
}
