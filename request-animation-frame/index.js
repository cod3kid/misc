const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

let output = 0;
let xPos = 0;

const paint = () => {
  output++;
  box1.textContent = output;

  if (output < 300) {
    requestAnimationFrame(paint);
  }
};

const move = (timestamp) => {
  if (timestamp) {
    // High Resolution timestamp that gets passed in
    const diff = timestamp - output;
    console.log(diff);
    output = timestamp;
  }

  xPos += 5;
  box2.style.transform = `translateX(${xPos}px)`;
  let limit = document.body.clientWidth - 100;
  if (xPos < limit) {
    requestAnimationFrame(move);
  }
};

requestAnimationFrame(move);
// requestAnimationFrame will pause when the browser tab is inactive. where as setInterval doesn'nt
