"use strict";

// Creating list of links to projects
const linksToProjects = document.querySelectorAll(".project-link");
const linksToExitProjects = document.querySelectorAll(".exit-project");
// Creating list of project divs
const listOfProjects = document.querySelectorAll(".project");
// Showing and hidding projects

// quit from project by esc key

for (let i = 0; i < 4; i++) {
  linksToProjects[i].addEventListener("click", function () {
    listOfProjects[i].classList.toggle("hidden");
    document.querySelector(".mask").classList.toggle("blurred");
  });
}

for (let i = 0; i < 4; i++) {
  linksToExitProjects[i].addEventListener("click", function () {
    listOfProjects[i].classList.toggle("hidden");
    document.querySelector(".mask").classList.toggle("blurred");
  });
}
