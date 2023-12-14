// const card = document.getElementById("card");
// let isDragging = false;

// card.addEventListener("mousedown", (e) => {
//   isDragging = true;
// });

// document.addEventListener("mousemove", (e) => {
//   if (isDragging) {
//     card.style.top = e.clientY + "px";
//     card.style.left = e.clientX + "px";
//   }
// });

// document.addEventListener("mouseup", (e) => {
//   isDragging = false;
// });

let posX = 0,
  posY = 0;
let isDragging = false;

const card = document.getElementById("card");

card.addEventListener("mousedown", (e) => {
  posX = e.clientX;
  posY = e.clientY;
  isDragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    posX = posX - e.clientX;
    posY = posY - e.clientY;

    card.style.top = card.offsetTop - posY + "px";
    card.style.left = card.offsetLeft - posX + "px";

    posX = e.clientX;
    posY = e.clientY;
  }
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;
});
