"use strict";
// Arrow down button
const arrowDown = document.getElementById("down");
// Creating list of links to projects
const linksToProjects = document.querySelectorAll(".project-link");
const linksToExitProjects = document.querySelectorAll(".exit-project");
// Creating list of project divs
const listOfProjects = document.querySelectorAll(".project");

// Showing and hidding projects
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

// Hide arrow after click or screen scroll
arrowDown.addEventListener("click", function () {
  arrowDown.classList.add("hidden");
});
window.addEventListener("scroll", function () {
  arrowDown.classList.add("hidden");
});

// Reveal segments
const allSegments = document.querySelectorAll(".segment");

const revealSegments = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("unshowed");
  observer.unobserve(entry.target);
};

const segmentObserver = new IntersectionObserver(revealSegments, {
  root: null,
  threshold: 0.2,
});

allSegments.forEach(function (segment) {
  segment.classList.add("unshowed");
  segmentObserver.observe(segment);
});
