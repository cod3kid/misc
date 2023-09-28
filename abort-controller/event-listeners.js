const controller = new AbortController();

window.addEventListener(
  "mousemove",
  () => {
    console.log("Mouse Moved");
  },
  {
    signal: controller.signal,
  }
);

window.addEventListener("mouseup", () => {
  controller.abort();
  console.log("Event listener removed");
});

// We can use window.removeEventListener
