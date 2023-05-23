import createNav from "./nav";
import createHomePage from "./home";
function component() {
  const contentDiv = document.getElementById("content");
  const element = document.createElement("div");

  element.appendChild(createHomePage());
  contentDiv.appendChild(element);
}

document.body.appendChild(createNav(), component());
