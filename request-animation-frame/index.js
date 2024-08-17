const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

let output = 0;
let xPos = 0;

const paint = () => {
  output++;
  box1.textContent = output;

  console.log("Done");
  if (output < 300) {
    requestAnimationFrame(paint);
  }
};

requestAnimationFrame(paint);
// requestAnimationFrame will pause when the browser tab is inactive. where as setInterval doesn'nt
