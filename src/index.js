import createNav from "./nav";

function component() {
  const contentDiv = document.getElementById("content");
  const element = document.createElement("div");

  element.appendChild(createNav());
  contentDiv.appendChild(element);
}

document.body.appendChild(component());
