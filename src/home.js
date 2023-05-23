import createMenu from "./sideMenu";

export default function createHomePage() {
  const contentDiv = document.getElementById("content");

  createMenu();

  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", "home");
  homeContainer.style.backgroundColor = "#7678ed";
  homeContainer.style.padding = "40%";

  contentDiv.appendChild(homeContainer);
}
