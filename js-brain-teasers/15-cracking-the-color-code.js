document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "yellow";

  console.log(ctx.fillStyle);
});
