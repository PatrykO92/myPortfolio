"use strict";
// TScripts related to entering to the page
const navLinks = document.querySelectorAll("nav a");
const [welcomeDiv1, welcomeDiv2] = document.querySelectorAll(".welcome");

const showPortfolioSite = function () {
  welcomeDiv1.classList.add("welcome-view-hidden-1");
  welcomeDiv2.classList.add("welcome-view-hidden-2");
  setTimeout(() => {
    navLinks.forEach((e) => {
      e.classList.remove("hidden-nav-links");
    });
  }, 1500);
};

document
  .querySelector(".welcome-view-1 > p")
  .addEventListener("click", showPortfolioSite);
///////

const linksToProjects = document.querySelectorAll(".project-link");
const linksToExitProjects = document.querySelectorAll(".exit-project");
const listOfProjects = document.querySelectorAll(".project");
const listOfCenteredDivs = document.querySelectorAll(".centered");

// Showing and hidding projects

linksToProjects.forEach((e, i) =>
  e.addEventListener("click", function () {
    listOfProjects[i].classList.toggle("hidden-p");
    listOfCenteredDivs[i].classList.toggle("blurred");
  })
);

linksToExitProjects.forEach((e, i) =>
  e.addEventListener("click", function () {
    listOfProjects[i].classList.toggle("hidden-p");
    listOfCenteredDivs[i].classList.toggle("blurred");
  })
);

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

//Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

const imgObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });
      observer.unobserve(entry.target);
    }
  },
  {
    root: null,
    threshold: [0, 0.3, 0.5, 0.8],
    rootMargin: "500px",
  }
);

imgTargets.forEach((target) => imgObserver.observe(target));
