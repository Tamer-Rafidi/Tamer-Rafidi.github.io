function toggleModal(modalSelector, shouldOpen) {
  var modal = document.querySelector(modalSelector);
  var modalContent = modal.querySelector(".icons-following");
  if (shouldOpen) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    modalContent.scrollTop = 0;
  } 
  else {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

document.getElementById("cta").addEventListener("click", function () {
  toggleModal(".modal", true);
});

document.querySelector(".close").addEventListener("click", function () {
  toggleModal(".modal", false);
});

document.getElementById("follower").addEventListener("click", function () {
  toggleModal(".follower-modal", true);
});

document
  .querySelector(".follower-close")
  .addEventListener("click", function () {
    toggleModal(".follower-modal", false);
});

document.getElementById("following").addEventListener("click", function() {
  toggleModal(".following-modal", true);
});

document.querySelector(".following-close").addEventListener("click", function () {
    toggleModal(".following-modal", false);
  });

document.querySelector(".following").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

document.querySelector(".followers").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});  

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const about = document.querySelector(".navbar-about");
const targetElement = document.querySelector(".about-me");

about.addEventListener("click", () => {
  targetElement.scrollIntoView({ behavior: "smooth" });
});

const projects = document.querySelector(".navbar-projects");
const targetProjects = document.querySelector(".projects");

projects.addEventListener("click", () => {
  targetProjects.scrollIntoView({ behavior: "smooth" });
});

let counter = document.querySelector(".counter");
let target = 10000;
let count = 0;
let minIncrement = 1; // minimum increment
let maxIncrement = 100; // maximum increment
let interval; // Declare interval variable outside the observer callback

let observerEnter = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      interval = setInterval(function () {
        let increment =
          Math.random() * (maxIncrement - minIncrement) + minIncrement;
        if (count < target) {
          count += increment;
          counter.innerText = Math.round(count);
        } else {
          counter.innerText = "10k+";
          clearInterval(interval);
          observerEnter.unobserve(counter);
        }
      }, 10);
    }
  },
);

let observerLeave = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      count = 0;
      counter.innerText = "0";
      clearInterval(interval); 
      observerEnter.observe(counter); 
    }
  },
  { threshold: [0] }
);

observerEnter.observe(counter);
observerLeave.observe(counter);

let counter2 = document.querySelector(".project-counter");
let target2 = 7;
let count2 = 0;
let increment = 1;
let interval2;

let observerEnter2 = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      interval2 = setInterval(function () {
        if (count2 < target2) {
          count2 += increment;
          counter2.innerText = count2;
        } 
        else {
          clearInterval(interval2);
          observerEnter2.unobserve(counter2);
        }
      }, 200);
    }
  },
);

let observerLeave2 = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      count2 = 0;
      counter2.innerText = "0";
      clearInterval(interval2);
      observerEnter2.observe(counter2);
    }
  },
  { threshold: [0] }
);

observerEnter2.observe(counter2);
observerLeave2.observe(counter2);

let counter3 = document.querySelector(".experience-counter");
let target3 = 3;
let count3 = 0;
let interval3;

let observerEnter3 = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    interval3 = setInterval(function () {
      if (count3 < target3) {
        count3 += increment;
        counter3.innerText = count3;
      } else {
        clearInterval(interval3);
        observerEnter3.unobserve(counter3);
      }
    }, 200);
  }
});

let observerLeave3 = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      count3 = 0;
      counter3.innerText = "0";
      clearInterval(interval3);
      observerEnter3.observe(counter3);
    }
  },
  { threshold: [0] }
);

observerEnter3.observe(counter3);
observerLeave3.observe(counter3);

function createObserver(elementId) {
  let element = document.querySelector(`#${elementId}`);
  let observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        element.classList.add("fade-in");
      }
      else { element.classList.remove("fade-in"); }
    }
  );

  observer.observe(element);
}

createObserver("stat1");
createObserver("stat2");
createObserver("stat3");
createObserver("border1");
createObserver("border2");
createObserver("project1");
createObserver("project2");
createObserver("project3");
createObserver("project4");
createObserver("project5");

