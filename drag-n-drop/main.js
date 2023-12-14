const card = document.getElementById("card");
let isDragging = false;

card.addEventListener("mousedown", (e) => {
  isDragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    card.style.top = e.clientY + "px";
    card.style.left = e.clientX + "px";
  }
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;
});
