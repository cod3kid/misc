const observer = new ResizeObserver((entries) => {
  const boxElement = entries[0];

  boxElement.target.style.backgroundColor =
    boxElement.contentRect.width < 150 ? "blue" : "red";
});

const box = document.querySelector(".box");

observer.observe(box);
