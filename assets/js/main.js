// HEADER

const navBar = document.querySelector("#navbar");
const txtHeader = document.querySelector(".headertxtsup");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    navBar.style.transform = "translateY(0)";
  }, 2500);
  setTimeout(() => {
    txtHeader.style.transform = "translateY(0)";
    txtHeader.style.opacity = "1";
  }, 3200);
});

// PRES & Txt Final

const handleScrollAnimation = (e) => {
  const windowHeight = window.innerHeight;
  const divRect = e.getBoundingClientRect();
  const divTop = divRect.top;
  const divBottom = divRect.bottom;
  const divPosition = divTop + (divBottom - divTop) / 2;

  if (divPosition >= 0 && divPosition <= windowHeight / 1.5) {
    e.style.opacity = "1";
    e.style.filter = "blur(0)";
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation(mask1);
  handleScrollAnimation(mask2);
  handleScrollAnimation(mask3);
  handleScrollAnimation(txtfinal);
});

// ART MART

const artMartDiv = document.querySelector(".sec-art-mart");
const artMartImg = document.querySelector("#art-mart-img");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  const divRect = artMartDiv.getBoundingClientRect();
  const divTop = divRect.top;
  const divBottom = divRect.bottom;

  const divPosition = divTop + (divBottom - divTop) / 2;

  if (divPosition >= 0 && divPosition <= windowHeight) {
    artMartImg.style.transform = "translateX(0)";
    artMartImg.style.opacity = "1";
  }
});

// Before Contact

const beforeElement = document.querySelector("#prix::before");
const windowHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const beforeHeight = windowHeight - scrollPosition;

  // Limitez la hauteur minimale de l'élément ::before
  const minHeight = 50; // Ajustez cette valeur selon vos besoins

  if (beforeHeight >= minHeight) {
    beforeElement.style.height = beforeHeight + "px";
  }
});
