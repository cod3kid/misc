const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// fillRect()
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 200, 100);

ctx.fillStyle = "blue";
ctx.fillRect(240, 20, 200, 100);

// strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.strokeRect(100, 200, 200, 100);
