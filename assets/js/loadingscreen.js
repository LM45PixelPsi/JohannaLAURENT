// Loading screen

const loadedElements = document.querySelector(".loaded");
const loadingScreen = document.getElementById("loadingscreen");
const loadingscreensvg = document.querySelector("#loadingscreensvg");

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
