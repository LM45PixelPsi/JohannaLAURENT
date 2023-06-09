// HEADER

const navBar = document.querySelector("#navbar");
const txtHeader = document.querySelector(".headertxtsup");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    navBar.style.filter = "blur(0)";
    navBar.style.opacity = "1";
    z;
  }, 2500);
  setTimeout(() => {
    txtHeader.style.filter = "blur(0)";
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

// const artMartDiv = document.querySelector(".sec-art-mart");
// const artMartImg = document.querySelector("#art-mart-img");

// window.addEventListener("scroll", () => {
//   const windowHeight = window.innerHeight;

//   const divRect = artMartDiv.getBoundingClientRect();
//   const divTop = divRect.top;
//   const divBottom = divRect.bottom;

//   const divPosition = divTop + (divBottom - divTop) / 2;

//   if (divPosition >= 0 && divPosition <= windowHeight) {
//     artMartImg.style.transform = "translateX(0)";
//     artMartImg.style.opacity = "1";
//   }
// });
