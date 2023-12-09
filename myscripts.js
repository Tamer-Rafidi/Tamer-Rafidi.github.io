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

