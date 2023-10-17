const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// // fillRect()
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 200, 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(240, 20, 200, 100);

// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = "green";
// ctx.strokeRect(100, 200, 200, 100);

// // clearRect()
// // ctx.clearRect(0, 0, 600, 600);

// // fillText()
// ctx.font = "16px Arial";
// ctx.fillStyle = "purple";
// ctx.fillText("Hello World!", 500, 50);

// // strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = "orange";
// ctx.strokeText("Good Bye", 500, 150);

// Path
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(150, 200);
ctx.lineTo(100, 100);
// ctx.closePath();
// ctx.stroke();
ctx.fillStyle = "orange";
ctx.fill();

ctx.rect(300, 100, 100, 100);
ctx.fill();
