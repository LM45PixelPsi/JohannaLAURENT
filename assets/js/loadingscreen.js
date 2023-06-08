// Loading screen

const loadedElements = document.querySelector(".loaded");
const loadingScreen = document.getElementById("loadingscreen");
const loadingscreensvg = document.querySelector("#loadingscreensvg");

document.addEventListener("DOMContentLoaded", () => {
  loadedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transition = "1s";
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loadingscreensvg.style.opacity = "0";
  }, 2000);
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    document.body.style.overflow = "auto";
  }, 3000);
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 4000);
});
