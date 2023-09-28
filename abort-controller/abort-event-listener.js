const controller = new AbortController();

controller.signal.addEventListener(
  "abort",
  () => {
    console.log("Aborted");
  },
  {
    once: true,
  }
);

controller.abort();
