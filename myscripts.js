function toggleModal(modalSelector, shouldOpen) {
  var modal = document.querySelector(modalSelector);
  if (shouldOpen) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  } else {
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

let counter = document.querySelector(".counter");
let target = 10000;
let count = 0;
let minIncrement = 1; // minimum increment
let maxIncrement = 100; // maximum increment

let observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      let interval = setInterval(function () {
        let increment =
          Math.random() * (maxIncrement - minIncrement) + minIncrement;
        if (count < target) {
          count += increment;
          counter.innerText = Math.round(count);
        } else {
          counter.innerText = "10k+";
          clearInterval(interval);
        }
      }, 10);
      observer.unobserve(counter);
    }
  },
  { threshold: [0] }
);

observer.observe(counter);